---
title: "Análisis Personalizable para seguimiento de Ensayos PAES"
excerpt: "Un piloto que apoya el registro de datos y la toma de decisiones para la Prueba de Acceso a la Educación Superior"
layout: single
toc: true
toc_icon: "egg"
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



---
## Introduction

<div align="justify" markdown="1">
Cada colegio que cuenta con educación media suele tener su propio plan de trabajo para hacer el análisis de los datos recabados de sus cuartos medios a la hora de hablar de las pruebas de ingreso a la educación superior. A pesar de esto y el problema inherente que acarrea el tener una herramienta que puede variar de contexto en contexto, he podido identificar ciertas características comunes en las que este tipo de instrumento podría mejorarse y hasta reformularse. La idea de este primer trabajo fue identificar algunas de estas características que hacen dificultoso el trabajo entre los equipos y crear aquellas funciones que provean información de mayor valor a la hora de tomar decisiones en el ámbito pedagógico. 

## Estudiando el problema

La labor consistía inicialmente en modificar o adaptar una planilla de Excel que se utilizaba en el colegio para poder hacer algunos análisis de los ensayos que se iban rindiendo por los estudiantes de 4° medio como parte del plan de preparación para la Prueba de Acceso a la Educación Superior (PAES). Una vez hecha la revisión del instrumento, se constató que las características principales que tenía eran más o menos las siguientes:

1. Permitía <span style="color: green;font-weight:bold;">registrar</span> los resultados de los ensayos rendidos cada mes para cada estudiante. Estos resultados eran únicamente las respuestas correctas de cada ensayo.
2. <span style="color: green;font-weight:bold;">Semaforizar</span> (poner en colores) los distintos resultados para identificar visualmente poblaciones de estudiantes en un set de 4 rangos de puntajes (rojo, amarillo, verde y azul) en cada una de las pruebas de cada mes.
3. <span style="color: green;font-weight:bold;">Clasificar</span> los resultados de acuerdo a grupos de trabajo, que a su vez estan asociados a un docente en específico.
4. <span style="color: green;font-weight:bold;">Clasificar</span> los puntajes de cada estudiante de utilizando los filtros de Excel
5. <span style="color: green;font-weight:bold;">Calcular</span> variables de tendencia central básicas como la media de los resultados que se van acumulando para así relacionarlo con las metas propuestas por el colegio para cada prueba.
6. <span style="color: green;font-weight:bold;">Identificar</span> estudiantes que pueden tener un desempeño que requiera atención particular. 
7. <span style="color: green;font-weight:bold;">Convertir</span> el puntaje obtenido (a partir de las respuestas correctas) a puntaje PAES usando unas tablas de conversión en hojas ocultas.

A partir de estas características también se solicitó información respecto de las distintas motiaciones que sugerían la necesidad de un cambio en la planilla. Las respuestas fueron estas:

1. Los puntajes de clasificación podían cambiar año a año debido a los ajustes en las estrategias académicas, así que se necesitaba algo más versatil.
2. La prueba M2 había sido ingresada a la planilla como una hoja aparte debido a que fue una prueba que surgió en medio del año escolar, así que necesitaba unificarse con las estadísticas de todas las pruebas y seguir su formato.
3. La manera de compartir la información con los docentes involucrados en el plan de 4° medio era derechamente o duplicar la planilla o permitir modificaciones imprevistas que implicarían un trabajo mayor en el futuro, así que la idea era proponer una solución a este problema.
4. Las tablas de conversión de RC a puntaje PAES van actualizandose año a año, por lo que se necesitaba una planilla que permitiera tal modificación de manera más simple. 

Algunas de las imágenes que muestran la planilla original se muestran a continuación:

<figure class="third">
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/semaforizacion.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/semaforizacion.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/resumen.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/resumen.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/grafico.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/grafico.png"></a>
	<figcaption>Imágenes que describen algunas de las funciones antes mencionadas de la planilla original trabajada. Las imágenes restantes se incluyen en la galería al final de este artículo.</figcaption>
</figure>

## La propuesta

Por supuesto, la propueta resolvería las solicitudes inciales pero de acuerdo a las necesidades que parecían proyectarse, se agregaron nuevas ideas que derechamente me pareció "buena idea" incluir. El detalle de las soluciones agregadas es el siguiente:

1. Una hoja de configuración de la planilla completa. Así se <u>centralizan los parámetros de control</u> del entorno de estudio.
2. Hacer que la semaforización sea variable y dependiente de el set de celdas que corresponda a cada prueba. Esto <u>agregaría una cualidad adaptativa</u> al instrumento.
3. Incluir las metas de distribución esperada en los gráficos de avance. Esto <u>permitiría que cada profesor visibilizara la meta</u> a medida que se van recibiendo los resultados.
4. Una hoja de clasificación para cada uno de los grupos. Otra función que <u>centraliza la información</u> en un solo lugar.
5. Trasladador de puntajes. Esto <u>evita las grandes jornadas de traspaso de información y disminuye los errores humanos</u> en los registros.
6. Un analisis de población por histograma variable. Con esta herramienta <u>se puede identificar poblaciones</u> a niveles de detalle que los 4 rangos estándar no permiten.
7. Agregar la posibilidad de construir un reporte para cada estudiante en PDF. Esto mejoraría por supuesto <u>la retroalimentación y el seguimiento de los estudiantes</u>.
8. Integrar una herramienta de envío automático a las familias, estudiantes y profesores jefes. Esto <u>promueve la retroalimentación en distintos niveles de acción del colegio y automatiza los reportes individualizando cada uno de los avances</u>.

Finalmente, la modificación probablemente más radical es la de <u>pasar del entorno de Excel a una planilla de Google Sheets</u>. La necesidad de esto pasa principalmente por la filosofía de trabajo que Excel tiene y que no promueve una interacción fácil en grupos de trabajo cuyos privilegios de acceso son distintos y requieren funciones adaptables a cada necesidad. Esto además de la dificultad existente para relacionar herramientas de automatización como el envío de correspondencia masiva por terceros.

## Diseño e Implementación

La construcción de la planilla inicia con el diseño estético para luego establecer la parte funcional. Se construyeron múltiples hojas que representarían los distintos entornos de trabajo. El detalle es el siguiente:

</div>

| **Nombre de Hoja**                      | **Visibilidad** | **Descripción**                                                    |
|-------------------------------|:--------:|--------------------------------------------------------------------|
| **GLOBAL_PARAMETERS**            | Invisible | Guardará los parámetros de los cursos disponibles para generar la lista de estudiantes, las tablas de conversión de puntajes y opciones para botones dentro de las otras hojas.           |
| **SETTINGS**                      |  Visible  | Panel de control inicial para que el usuario modifique parámetros que tienen que ver con los análisis posteriores. Esto no incluye la clasificación de estudiantes por grupo.                                                      |
| **GRUPOS**                       |   Visible   | Presenta la lista de estudiantes y una clasificación opr grupos y especialidades que dependen de los valores ingresados en SETTINGS. |
| **TRASLADADOR DE PUNTAJES**            |   Visible   | Permite copiar directamente los ID de cada estudiante y su puntaje con el fin de organizarlos y traspasar la información de manera directa a la base de datos de la planilla.       |
| **BASE DE DATOS**           |   Visible   | Puntajes en cada una de las jornadas de ensayo clasificados por tipo y "semaforizados" de acuerdo a los puntajes ingresados en SETTINGS       |
| **ANÁLISIS C. LECTORA**          |    Visible   | Visualización de la información almacenada en la base de datos para la prueba de Comprensión Lectora                              |
| **ANÁLISIS MATEMÁTICA**          |  Visible  | Visualización de la información almacenada en la base de datos para la prueba de Comprensión Matemática                       |
| **ANÁLISIS M2** |  Visible  | Visualización de la información almacenada en la base de datos para la prueba de M2                      |
| **ANÁLISIS HISTORIA**                     |    Visible   | Visualización de la información almacenada en la base de datos para la prueba de Historia |
| **ANÁLISIS CIENCIAS**      |  Visible  | Visualización de la información almacenada en la base de datos para la prueba de Ciencias     |
| **PREPARACIÓN ENVÍO DE REPORTES**         | Visible | Entorno para seleccionar a los estudiantes a los que se enviará el reporte en PDF. Tiene también las opciones de enviar la información a apoderados y profesores jefe de cada curso.         |
| **FORMATO DE REPORTES**         | Visible | Formato que se utilizará para crear el PDF de cada reporte y que tiene la posibilidad de seleccionar a cada estudiante para ver sus avances generales.         |

<div>


</div>

```html
function Macroquitadodefiltros() {
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getRange('B4:AQ113').createFilter();
};
```

{% highlight javascript linenos %}
function Macroquitadodefiltros() {
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getRange('B4:AQ113').createFilter();
};
{% endhighlight %}

{% highlight wl linenos %}
function Macroquitadodefiltros() {
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getRange('B4:AQ113').createFilter();
};
{% endhighlight %}

## Results and Analysis

Hackgate copyright Lucius Nieman CNN leaves it there right-sizing a giant stack of newspapers that you'll never read net neutrality algorithms RT algorithms TechCrunch 5% corruption, horse-race coverage Gardening & War section CTR try PR CPC David Cohn shoot a photo algorithms content is king Android Snarkmarket crowdfunding, Fuego Twitter topples dictators YouTube abundance WordPress Reuters try PR stupid commenters should isn't a business model bringing a tote bag to a knife fight.



## Conclusions

{% include gallery caption="Imágenes que describen algunas de las funciones antes mencionadas de la planilla original trabajada." %}

## References

[^Huang2001]: E, W. & Huang, Z., 2001. Matching Conditions in Atomistic-Continuum Modeling of Materials. _arXiv.org_, (13), p.135501. Available at: [http://arxiv.org/abs/cond-mat/0106615v1](http://arxiv.org/abs/cond-mat/0106615v1){:target="_blank"}.
