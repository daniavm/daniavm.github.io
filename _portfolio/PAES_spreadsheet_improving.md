---
title: "Optimizando el análisis en el seguimiento de Ensayos PAES"
excerpt: "Un piloto que apoya el registro de datos y la toma de decisiones para la Prueba de Acceso a la Educación Superior"
layout: single
toc: true
toc_icon: "egg"
toc_sticky: true

header:
  image: /assets/images/portfolio_images/timesheetJsBanner.jpg
  teaser: assets/images/portfolio_images/timesheetJsBanner.jpg
sidebar:
  - title: "Mi Rol"
    text: "Programador y Analista de Datos"

  - title: "Responsabilidades"
    text: "Mejorar o reconstruir la planilla de análisis de ensayos PAES existente en el colegio."
gallery:
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/semaforizacion.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/semaforizacion.png
    alt: "placeholder image 1"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/resumen.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/resumen.png
    alt: "placeholder image 2"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/grafico.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/grafico.png
    alt: "placeholder image 3"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/resumen_grupos.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/resumen_grupos.png
    alt: "placeholder image 4"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/alertas.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/alertas.png
    alt: "placeholder image 5"
  - url: /assets/images/assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png
    alt: "placeholder image 6"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_asignatura.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_asignatura.png
    alt: "placeholder image 7"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_grupal.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_grupal.png
    alt: "placeholder image 8"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_estudiante.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_estudiante.png
    alt: "placeholder image 9"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png
    alt: "placeholder image 10"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png
    alt: "placeholder image 11"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/trasladador.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/trasladador.png
    alt: "placeholder image 12"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/mensajes_ui.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/mensajes_ui.png
    alt: "placeholder image 13"

---
## Introduction

<div align="justify" markdown="1">
En cada colegio de educación media, es común tener un plan de trabajo para analizar los datos de los estudiantes de 4° medio, especialmente cuando se trata de las pruebas de ingreso a la educación superior (PAES). Identificar características comunes y mejorar este tipo de herramientas ha sido mi objetivo principal. Mi proyecto se centra en crear funciones que proporcionen información valiosa para la toma de decisiones pedagógicas.

## Estudiando el problema

Mi labor inicial consistió en modificar una hoja de cálculo de Excel utilizada en el colegio para analizar los ensayos de los estudiantes de 4° medio, como parte de su preparación para la Prueba de Acceso a la Educación Superior (PAES). Tras una revisión exhaustiva, identifiqué las siguientes características clave:

1. <span style="color: green;font-weight:bold;">Registrar</span> los resultados mensuales de cada estudiante, reflejando solo las respuestas correctas de cada ensayo.
2. <span style="color: green;font-weight:bold;">Semaforizar</span> los resultados por grupos de trabajo, asociados a docentes específicos.
3. <span style="color: green;font-weight:bold;">Clasificar</span> los resultados de acuerdo a grupos de trabajo, que a su vez estan asociados a un docente en específico.
4. <span style="color: green;font-weight:bold;">Clasificar</span> los puntajes de cada estudiante mediante filtros de Excel.
5. <span style="color: green;font-weight:bold;">Calcular</span> las variables de tendencia central básicas, como la media de los resultados acumulados, relacionándolos con las metas del colegio.
6. <span style="color: green;font-weight:bold;">Identificar</span> estudiantes que requieran atención especial debido a su desempeño.
7. <span style="color: green;font-weight:bold;">Convertir</span> los puntajes obtenidos a puntajes PAES utilizando tablas de conversión en hojas ocultas.

También investigué las motivaciones detrás de la necesidad de un cambio en la planilla:

1. Los puntajes de clasificación varían año a año debido a ajustes en las estrategias académicas, requiriendo mayor versatilidad.
2. La prueba M2, que surgió en medio del año escolar, necesitaba unificarse con las estadísticas de todas las pruebas.
3. La forma de compartir información con los docentes de 4° medio requería una solución más eficiente y menos propensa a errores.
4. Las tablas de conversión de RC a puntaje PAES se actualizan anualmente, exigiendo una planilla que permitiera modificaciones más sencillas.

Algunas de las imágenes que muestran la planilla original se muestran a continuación:

<figure class="third">
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/semaforizacion.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/semaforizacion.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/resumen.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/resumen.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/grafico.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/grafico.png"></a>
	<figcaption>Imágenes que describen algunas de las funciones antes mencionadas de la planilla original trabajada. Las imágenes restantes se incluyen en la galería al final de este artículo.</figcaption>
</figure>

## La Propuesta

Además de abordar los desafíos iniciales, mi propuesta incluye nuevas ideas que consideré fundamentales:

1. Hoja de configuración para <u>centralizar parámetros de control</u> en un solo lugar.
2. Semaforización <u>variable y adaptativa</u>, según el conjunto de celdas correspondiente a cada prueba.
3. Inclusión de metas de distribución esperada en los gráficos de avance para <u>que los profesores visualicen las metas fácilmente</u>.
4. Hoja de clasificación para cada grupo de trabajo, <u>centralizando la información</u> de manera eficiente.
5. Trasladador de puntajes <u>para copiar y traspasar la información sin errores</u>.
6. Análisis de población por histograma variable para <u>identificar detalles en los resultados</u>.
7. Generación de <u>reportes personalizados en PDF</u> para mejorar la retroalimentación y el seguimiento de los estudiantes.
8. Integración de herramienta de envío automático para <u>promover la retroalimentación en distintos niveles</u> del colegio.

Por último, una de las modificaciones más significativas es pasar del entorno de Excel a Google Sheets para fomentar la colaboración en grupos de trabajo con diferentes niveles de acceso y mayor adaptabilidad a las necesidades específicas. Además, facilita la integración de herramientas de automatización, como el envío de correspondencia masiva.

## Diseño e Implementación

La planilla se construyó en varias hojas, cada una con un propósito específico:

</div>

| **Nombre de Hoja**                      | **Descripción**                                                    |
|-------------------------------|--------------------------------------------------------------------|
| **GLOBAL_PARAMETERS**            | Guarda los parámetros de los cursos disponibles, tablas de conversión y opciones para botones.           |
| **SETTINGS**                      | Panel de control inicial para modificar parámetros de análisis.                                                     |
| **GRUPOS**                       | Lista de estudiantes clasificados por grupos y especialidades. |
| **TRASLADADOR DE PUNTAJES**            | Permite copiar y traspasar la información de puntajes.       |
| **BASE DE DATOS**           | Almacena los puntajes de cada jornada de ensayo y su respectiva semaforización.       |
| **ANÁLISIS C. LECTORA**          | Visualización de la información almacenada en la base de datos para la prueba de Comprensión Lectora                              |
| **ANÁLISIS MATEMÁTICA, ANÁLISIS M2, ANÁLISIS HISTORIA, ANÁLISIS CIENCIAS**          | Visualización de los puntajes por prueba.                       |
| **PREPARACIÓN ENVÍO DE REPORTES**         | Permite seleccionar estudiantes para enviar reportes en PDF a apoderados y profesores.         |
| **FORMATO DE REPORTES**         | Define el formato de los reportes en PDF.         |

## Resultados y Análisis

<div align="justify" markdown="1">

El análisis de la planilla piloto se basa en las diferentes hojas creadas para cada proceso de análisis del colegio. A continuación, se detallan cada una de ellas para describir mi trabajo en profundidad.


### Hoja de Settings (configuración)

Esta hoja se construyó con la función de centralizar los parámetros más importantes que generarían la estética y clasificación visual de los elementos dentro de los análisis. 

En la columna A y B se encuentran los selectores de los cursos que busca mostrarse en la planilla. Estos cursos están ligados directamente a la base de datos de estudiantes del colegio.

<figure>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png"></a>
	<figcaption><a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png" title="Hoja de Settings">Hoja de la planilla modificada que permite cambiar los parámetros de clasificación de la información, resultados, grupos y elementos visuales.</a>.</figcaption>
</figure>

Se incluyeron 2 secciones que tienen que ver con la cantidad de grupos de estudiantes que darán cierta prueba. Esto está relacionado con la estrategia de trabajo del colegio pero es adaptable a un contexto incluso donde haya solo un grupo de estudiantes. En estas secciones es posible agregar el nombre del docente que tiene a cargo cada grupo y el nombre d ela asignatura que se tenga en el colegio.

Se incluyeron dos herramientas para monitorear el logro de las metas: por puntaje y por distribución. Las metas por puntaje responden a un puntaje físico esparado para alcanzar por la generación mientras que las metas por distribución son una cantidad de estudiantes que se espera que se encuentren en cada uno de los rangos de logro. Adjunto a esto se agregó un parámetro de tolerancia llamado "Porcentaje de Error" que busca regular los resultados obtenidos a lo largo del tiempo. Un ejemplo de uso del parámetro anterior es que si un curso alcanza su meta de 750 puntos no será considerado como logro hasta que la desviación de los resultados obtenidos no haya superado el rango de tolerancia, es decir un 3% en este caso.

Finalmente, se agregan los rangos de respuestas correctas (RC) a los que respondería cada una de las clasificaciones. Esto impactará posteriormente en la clasificación visual de los entornos de análisis.


### Hoja de Clasificación de Grupos


La hoja siguiente es el primer entorno que incluye los datos de los estudiantes. En este punto se busca solamente hacer la clasificación más detallada de la información por grupos. 


<figure>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png"></a>
	<figcaption><a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png" title="Hoja de Clasificacion de Grupos">Hoja de clasificación de grupos por cada una de las pruebas. Se adjunta también una clasificación para la especialidad en la prueba de ciencias. </a>.</figcaption>
</figure>

### Hoja del "Trasladador" de Puntajes

<figure class="half">
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/trasladador.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/trasladador.png"></a>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/mensajes_ui.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/mensajes_ui.png"></a>
	<figcaption>Trasladador y mensajes de interfaz de usuario</figcaption>
</figure>

{% highlight javascript linenos %}
function Macroquitadodefiltros() {
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getRange('B4:AQ113').createFilter();
};
{% endhighlight %}


### Hoja para la Base de Datos

Esta hoja queda como remanente del sistema original ya que había una familiaridad con su uso de parte del colegio. Aquí se pueden hacer filtros de información por cad auno de los estudiantes de cada prueba, pero la filosofía sugerida de uso fue que realmente no había que modificar nada de esta parte ya que se encontraban las mismas herramientas en las secciones de análisis. 

<figure>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png"></a>
	<figcaption><a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png" title="Hoja de Base de Datos">Base de Datos</a>.</figcaption>
</figure>

Aquí se puede ver también una de las primeras consecuencias de los cambios en la hoja de SETTINGS, ya que cada uno de los colores mostrados en los puntajes responde a los rangos llenados en la hoja inicial.

</div>




### Hoja de Análisis para Docentes

<figure class="third">
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_asignatura.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_asignatura.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_grupal.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_grupal.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_estudiante.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_estudiante.png"></a>
	<figcaption>Hoja de análisis</figcaption>
</figure>



## Conclusiones


## References

[^Huang2001]: E, W. & Huang, Z., 2001. Matching Conditions in Atomistic-Continuum Modeling of Materials. _arXiv.org_, (13), p.135501. Available at: [http://arxiv.org/abs/cond-mat/0106615v1](http://arxiv.org/abs/cond-mat/0106615v1){:target="_blank"}.

## Galería de Imágenes

A continuación se muestra una galería de las imágenes utilizadas en todo este artículo.

{% include gallery caption="Imágenes que describen algunas de las funciones antes mencionadas de la planilla original trabajada." %}