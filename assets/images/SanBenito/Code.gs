/******************************************************
 * Backend Apps Script con API JSONP (y JSON normal)
 * - Expone getSheetDataSafe, hasVoted, saveVote
 * - Lee "No se incluye" con tolerancia
 * - Guarda votos con Nombre/Email/Subárea por campo
 * - Compatible con despliegue como Web App
 * Daniel + IA (2025)
 ******************************************************/

// =================== CONFIG ===================
const DATA_SHEET_NAME  = 'database';
const VOTES_SHEET_NAME = 'Votaciones';
const ISSUES_SHEET_NAME = 'Problemas';

// (Opcional) API Key: en Propiedades del Script, SHARED_API_KEY="mi-clave".
function getApiKey_() {
  return (PropertiesService.getScriptProperties().getProperty('SHARED_API_KEY') || '').trim();
}

// =================== HELPERS BASE ===================
function getSpreadsheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss) return ss;
  const id = PropertiesService.getScriptProperties().getProperty('DATA_SPREADSHEET_ID');
  if (!id) throw new Error('Falta DATA_SPREADSHEET_ID o el proyecto no está ligado a una hoja.');
  return SpreadsheetApp.openById(id);
}

function cleanHeader(text) {
  if (typeof text !== 'string') return '';
  return text.replace(/\u00A0/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalize(s) {
  return cleanHeader(String(s || ''))
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function findIndex(headers, label) {
  const goal = normalize(label);
  return headers.findIndex(h => normalize(h) === goal);
}

/** true/1/sí/yes/x → true (tolerante) */
function toBoolLoose_(v) {
  if (v === true) return true;
  if (v === false) return false;
  if (v == null) return false;
  const s = String(v).trim().toLowerCase();
  if (s === '') return false;
  return ['true','1','sí','si','yes','y','x','t','verdadero'].includes(s);
}

// =================== DIRECTORY (lee "No se incluye") ===================
function loadDirectory_() {
  const ss = getSpreadsheet_();
  const sheet = ss.getSheetByName(DATA_SHEET_NAME);
  if (!sheet) return { ok:false, error:`No existe la hoja "${DATA_SHEET_NAME}".`, rows:[], headers:[] };

  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  if (lastRow <= 1 || lastCol === 0) return { ok:true, rows:[], headers:[] };

  const values = sheet.getRange(1,1,lastRow,lastCol).getValues();
  const rawHeaders = values.shift();
  const headers = rawHeaders.map(cleanHeader);

  const idx = {
    nombre:         findIndex(headers, 'Nombre'),
    primerApellido: findIndex(headers, 'Primer Apellido'),
    segundoApellido:findIndex(headers, 'Segundo Apellido'),
    email:          findIndex(headers, 'Email'),
    fechaIngreso:   findIndex(headers, 'Fecha Ingreso'),
    grupo:          findIndex(headers, 'Grupo'),
    departamento:   findIndex(headers, 'Nombre Sub-área Asignada(o)'),
    noSeIncluye: (function () {
      const cands = [
        'No se incluye','No se Incluye','no se incluye',
        'noSeIncluye','NoSeIncluye','Excluir','exclude','Excluded'
      ];
      for (const c of cands) { const pos = findIndex(headers, c); if (pos !== -1) return pos; }
      return -1;
    })()
  };

  // Requeridas mínimas
  const required = ['nombre','primerApellido','segundoApellido','email','fechaIngreso','grupo','departamento'];
  for (const k of required) if (idx[k] === -1) return { ok:false, error:`Falta columna requerida: "${k}"`, rows:[], headers };

  const tz = Session.getScriptTimeZone() || 'America/Santiago';

  const rows = values.map(r => {
    const email = r[idx.email];
    if (!email || String(email).indexOf('@') === -1) return null;

    const fecha = r[idx.fechaIngreso];
    const fechaTxt = (fecha instanceof Date)
      ? Utilities.formatDate(fecha, tz, 'yyyy-MM-dd')
      : (fecha ? String(fecha) : '');

    const rawEx = (idx.noSeIncluye !== -1) ? r[idx.noSeIncluye] : null;

    return {
      nombre: r[idx.nombre],
      primerApellido: r[idx.primerApellido],
      segundoApellido: r[idx.segundoApellido],
      email: String(email).trim(),
      fechaIngreso: fechaTxt,
      grupo: r[idx.grupo],
      departamento: r[idx.departamento],
      noSeIncluye: toBoolLoose_(rawEx) // bandera que el front usa para excluir
    };
  }).filter(Boolean);

  return { ok:true, rows, headers };
}

function dirLookup_(directoryRows, email) {
  const needle = String(email || '').toLowerCase().trim();
  if (!needle) return { name:'', email:'', subarea:'' };
  for (const p of directoryRows) {
    if (String(p.email||'').toLowerCase().trim() === needle) {
      const name = [p.nombre, p.primerApellido, p.segundoApellido].filter(Boolean).join(' ').replace(/\s+/g,' ').trim();
      return { name, email: p.email || '', subarea: p.departamento || '' };
    }
  }
  return { name:'', email: email||'', subarea:'' };
}

// =================== VOTES SHEET ===================
function ensureVotesSheet_() {
  const ss = getSpreadsheet_();
  let sh = ss.getSheetByName(VOTES_SHEET_NAME);
  if (!sh) sh = ss.insertSheet(VOTES_SHEET_NAME);

  const EXT_HEADERS = [
    'Timestamp',
    'Votante Nombre','Votante Email','Votante Subárea',
    'Voto1 Nombre','Voto1 Email','Voto1 Subárea',
    'Voto2 Nombre','Voto2 Email','Voto2 Subárea',
    'Voto3 Nombre','Voto3 Email','Voto3 Subárea'
  ];

  const lastRow = sh.getLastRow(), lastCol = sh.getLastColumn();
  if (lastRow < 1 || lastCol < 1) {
    sh.clear();
    sh.getRange(1,1,1,EXT_HEADERS.length).setValues([EXT_HEADERS]);
    return sh;
  }
  const header = sh.getRange(1,1,1,lastCol).getValues()[0].map(cleanHeader);
  const looksExtended = EXT_HEADERS.every((h,i)=> (header[i]||'')===h);
  if (!looksExtended) { sh.clear(); sh.getRange(1,1,1,EXT_HEADERS.length).setValues([EXT_HEADERS]); }
  return sh;
}

// =================== ISSUES SHEET ===================
function ensureIssuesSheet_() {
  const ss = getSpreadsheet_();
  let sh = ss.getSheetByName(ISSUES_SHEET_NAME);
  if (!sh) sh = ss.insertSheet(ISSUES_SHEET_NAME);

  const ISSUES_HEADERS = [
    'Timestamp',
    'Nombre','Email','Descripción','Diagnóstico Técnico','Estado'
  ];

  const lastRow = sh.getLastRow(), lastCol = sh.getLastColumn();
  if (lastRow < 1 || lastCol < 1) {
    sh.clear();
    sh.getRange(1,1,1,ISSUES_HEADERS.length).setValues([ISSUES_HEADERS]);
    return sh;
  }
  const header = sh.getRange(1,1,1,lastCol).getValues()[0].map(cleanHeader);
  const looksIssues = ISSUES_HEADERS.every((h,i)=> (header[i]||'')===h);
  if (!looksIssues) { sh.clear(); sh.getRange(1,1,1,ISSUES_HEADERS.length).setValues([ISSUES_HEADERS]); }
  return sh;
}

// =================== CORE API (JSON) ===================
function getSheetDataSafe() {
  try {
    const dir = loadDirectory_();
    if (!dir.ok) return { ok:false, data:[], preview:null, meta:{}, error: dir.error || 'No se pudo cargar' };
    return { ok:true, data: dir.rows, preview:null, meta:{}, error:null };
  } catch (e) {
    return { ok:false, data:[], preview:null, meta:{}, error:'Error: '+e.message };
  }
}

function hasVoted(voterEmail) {
  const email = String(voterEmail || '').toLowerCase().trim();
  if (!email) return { voted:false, lastAt:null };
  const ss = getSpreadsheet_();
  const sh = ss.getSheetByName(VOTES_SHEET_NAME);
  if (!sh) return { voted:false, lastAt:null };
  const lastRow = sh.getLastRow(); if (lastRow < 2) return { voted:false, lastAt:null };

  const lastCol = sh.getLastColumn();
  const header = sh.getRange(1,1,1,lastCol).getValues()[0].map(cleanHeader);
  const idxVoterEmail = header.indexOf('Votante Email');
  const idxTimestamp  = header.indexOf('Timestamp');
  if (idxVoterEmail === -1 || idxTimestamp === -1) return { voted:false, lastAt:null };

  const data = sh.getRange(2,1,lastRow-1,lastCol).getValues();
  const tz = Session.getScriptTimeZone() || 'America/Santiago';
  let lastAt = null;

  for (const row of data) {
    const ve = String(row[idxVoterEmail] || '').toLowerCase().trim();
    if (ve === email) {
      const ts = row[idxTimestamp];
      lastAt = (ts instanceof Date) ? Utilities.formatDate(ts, tz, 'yyyy-MM-dd HH:mm') : (ts ? String(ts) : null);
    }
  }
  return lastAt ? { voted:true, lastAt } : { voted:false, lastAt:null };
}

function saveVote(voteData) {
  const sh = ensureVotesSheet_();

  // Validación mínima por email
  const voterEmail = String(voteData?.votanteEmail || voteData?.voter?.email || '').toLowerCase().trim();
  const v1Email    = String(voteData?.voto1 || voteData?.details?.find?.(d=>d.slot===1)?.email || '').toLowerCase().trim();
  const v2Email    = String(voteData?.voto2 || voteData?.details?.find?.(d=>d.slot===2)?.email || '').toLowerCase().trim();
  const v3Email    = String(voteData?.voto3 || voteData?.details?.find?.(d=>d.slot===3)?.email || '').toLowerCase().trim();

  if (!voterEmail || !v1Email || !v2Email) throw new Error('Faltan campos obligatorios (votante, voto1, voto2).');

  const uniq = [v1Email, v2Email].concat(v3Email ? [v3Email] : []);
  const setU = new Set(uniq.filter(Boolean));
  if (setU.size !== uniq.filter(Boolean).length) throw new Error('Los votos deben ser por personas distintas.');
  if (uniq.includes(voterEmail)) throw new Error('No puedes votarte a ti mismo.');

  // Directory para completar nombre/subárea si no vinieron en el payload
  const dir = loadDirectory_();
  const directory = dir.ok ? dir.rows : [];

  function fromPayloadOrDirectory(slot, fallbackEmail) {
    const bySlot = (Array.isArray(voteData.details) ? voteData.details.find(d => d && d.slot === slot) : null) || {};
    const email = (bySlot.email || fallbackEmail || '').trim();
    const name  = (bySlot.name  || '').trim();
    const sub   = (bySlot.subarea || '').trim();
    if (name && email && sub) return { name, email, subarea: sub };
    const resolved = dirLookup_(directory, email);
    return { name: name || resolved.name, email: email || resolved.email, subarea: sub || resolved.subarea };
  }

  const voter = (voteData.voter && (voteData.voter.name || voteData.voter.subarea))
    ? { name:(voteData.voter.name||'').trim(), email:(voteData.voter.email||voterEmail).trim(), subarea:(voteData.voter.subarea||'').trim() }
    : dirLookup_(directory, voterEmail);

  const d1 = fromPayloadOrDirectory(1, v1Email);
  const d2 = fromPayloadOrDirectory(2, v2Email);
  const d3 = v3Email ? fromPayloadOrDirectory(3, v3Email) : { name:'', email:'', subarea:'' };

  sh.appendRow([
    new Date(),
    voter.name, voter.email, voter.subarea,
    d1.name, d1.email, d1.subarea,
    d2.name, d2.email, d2.subarea,
    d3.name, d3.email, d3.subarea
  ]);

  return { ok:true, message:'OK' };
}

function saveIssueReport(issueData) {
  const sh = ensureIssuesSheet_();

  // Validación mínima
  const email = String(issueData?.email || '').toLowerCase().trim();
  const nombre = String(issueData?.nombre || issueData?.name || '').trim();
  const descripcion = String(issueData?.descripcion || issueData?.description || '').trim();
  
  if (!email || !nombre) {
    throw new Error('Faltan campos obligatorios (nombre y email).');
  }

  // Buscar en el directorio para completar el nombre si solo viene email
  const dir = loadDirectory_();
  const directory = dir.ok ? dir.rows : [];
  const userInDirectory = directory.find(p => 
    String(p.email || '').toLowerCase().trim() === email
  );

  let finalName = nombre;
  if (userInDirectory) {
    finalName = [
      userInDirectory.nombre, 
      userInDirectory.primerApellido, 
      userInDirectory.segundoApellido
    ].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
  }

  const diagnostico = String(issueData?.diagnostico || issueData?.technical || '').trim();
  
  sh.appendRow([
    new Date(),
    finalName,
    email,
    descripcion,
    diagnostico,
    'Pendiente'
  ]);

  return { ok: true, message: 'Reporte guardado correctamente' };
}

// =================== API LAYER (JSON + JSONP) ===================

/** Envía JSON o JSONP si viene ?callback= */
function jsonOrJsonp_(obj, e) {
  var json = JSON.stringify(obj);
  var cb = (e && e.parameter && e.parameter.callback) ? String(e.parameter.callback).trim() : '';
  if (cb) {
    return ContentService
      .createTextOutput(cb + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function tryParse_(s) { try { return JSON.parse(s); } catch (_){ return null; } }

function checkApiKeyOk_(e) {
  const required = getApiKey_();
  if (!required) return true;
  const key = (e && e.parameter && (e.parameter.key || e.parameter.api_key)) || '';
  return String(key || '').trim() === required;
}

/** GET con soporte JSONP:
 *  - ?fn=getSheetDataSafe
 *  - ?fn=hasVoted&email=...
 *  - ?fn=saveVote&payload=<json-url-encoded>  (para guardar vía JSONP)
 *  - (opcional) &key=<API_KEY>
 */
function doGet(e) {
  try {
    if (!checkApiKeyOk_(e)) return jsonOrJsonp_({ ok:false, error:'API key inválida' }, e);

    var fn = String(e.parameter.fn || '').trim();

    if (fn === 'getSheetDataSafe') {
      return jsonOrJsonp_(getSheetDataSafe(), e);
    }

    if (fn === 'hasVoted') {
      return jsonOrJsonp_(hasVoted(e.parameter.email || ''), e);
    }

    // Guardado por GET (JSONP): payload url-encoded
    if (fn === 'saveVote') {
      var payloadStr = e.parameter.payload || '';
      var payload = {};
      if (payloadStr) {
        var parsed = tryParse_(payloadStr);
        if (!parsed) return jsonOrJsonp_({ ok:false, error:'payload inválido' }, e);
        payload = parsed;
      }
      try {
        var r = saveVote(payload);
        return jsonOrJsonp_(typeof r === 'object' ? r : { ok:true, message:String(r||'OK') }, e);
      } catch (err) {
        return jsonOrJsonp_({ ok:false, error:String(err && err.message || err) }, e);
      }
    }

    // Guardado de reporte de problemas
    if (fn === 'saveIssueReport') {
      var payloadStr = e.parameter.payload || '';
      var payload = {};
      if (payloadStr) {
        var parsed = tryParse_(payloadStr);
        if (!parsed) return jsonOrJsonp_({ ok:false, error:'payload inválido' }, e);
        payload = parsed;
      }
      try {
        var r = saveIssueReport(payload);
        return jsonOrJsonp_(typeof r === 'object' ? r : { ok:true, message:String(r||'OK') }, e);
      } catch (err) {
        return jsonOrJsonp_({ ok:false, error:String(err && err.message || err) }, e);
      }
    }

    return jsonOrJsonp_({ ok:false, error:'Función GET no soportada' }, e);

  } catch (err) {
    return jsonOrJsonp_({ ok:false, error:String(err && err.message || err) }, e);
  }
}

/** POST (para uso interno/proxy; no resuelve CORS en GitHub Pages) */
function doPost(e) {
  const body = tryParse_(e && e.postData && e.postData.contents);
  if (!checkApiKeyOk_(e)) return jsonOrJsonp_({ ok:false, error:'API key inválida' }, e);
  if (!body || !body.fn) return jsonOrJsonp_({ ok:false, error:'Body inválido' }, e);

  if (body.fn === 'saveVote') {
    try {
      const r = saveVote(body.payload || {});
      return jsonOrJsonp_(typeof r === 'object' ? r : { ok:true, message:String(r||'OK') }, e);
    } catch (err) {
      return jsonOrJsonp_({ ok:false, error:String(err && err.message || err) }, e);
    }
  }

  if (body.fn === 'saveIssueReport') {
    try {
      const r = saveIssueReport(body.payload || {});
      return jsonOrJsonp_(typeof r === 'object' ? r : { ok:true, message:String(r||'OK') }, e);
    } catch (err) {
      return jsonOrJsonp_({ ok:false, error:String(err && err.message || err) }, e);
    }
  }
  
  return jsonOrJsonp_({ ok:false, error:'Función POST no soportada' }, e);
}
