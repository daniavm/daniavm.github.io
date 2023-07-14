---
title: "Creación de Planilla de Análisis Personalizable para Ensayos de Prueba PAES"
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
  - url: /assets/images/teaser_wallpaper.jpg
    image_path: assets/images/teaser_wallpaper.jpg
    alt: "placeholder image 1"
  - url: /assets/images/teaser_wallpaper.jpg
    image_path: assets/images/teaser_wallpaper.jpg
    alt: "placeholder image 2"

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
3. La manera de compartir la información con los docentes involucrados en el plan de 4° medio era derechamente o duplicar la planilla o permitir modificaciones imprevistas que implicarían un trabajo mayor en el futuro, asíq ue la idea era proponer una solución a este problema.
4. Las tablas de conversión de RC a puntaje PAES van actualizandose año a año, por lo que se necesitaba una planilla que permitiera tal modificación de manera más simple. 

Algunas de las imágenes que muestran la planilla original se muestran a continuación:

```html
<figure class="third">
	<img src="assets/images/portfolio_images/spreadsheet_PAES_improve/semaforizacion.png">
	<img src="assets/images/portfolio_images/spreadsheet_PAES_improve/resumen.png">
	<img src="assets/images/portfolio_images/spreadsheet_PAES_improve/grafico.png">
	<figcaption>Imágenes que describen algunas de las funciones antes mencionadas de la planilla original trabajada.</figcaption>
</figure>
```

</div>

## La planilla original

| **NAME**                      | **Type** | **Description**                                                    |
|-------------------------------|:--------:|--------------------------------------------------------------------|
| **sent_timestamp**            | DateTime | Timestamp indicating the date the student was registered           |
| **mail**                      |  String  | Student email                                                      |
| **dia**                       |   Date   | Date declared by the student who makes the registration of his log |
| **hora_de_inicio**            |   Time   | Time that the student declares that he started his study day       |
| **hora_de_termino**           |   Time   | Time that the student declares that he finished his study day      |
| **duracion_minutos**          |    Int   | Duration of the study time in minutes                              |
| **objetivo_logrado**          |  String  | Objective that was achieved in the study day                       |
| **describe_como_lo_lograste** |  String  | Description of how the objective was achieved                      |
| **nivel**                     |    Int   | Number that indicates the ability and skill worked by the student. |
| **emocion_predominante**      |  String  | Predominant emotion at the time of working the declared record     |
| **edition_timestamp**         | DateTime | Timestamp of the last time the submitted record was edited         |

## La propuesta a nuevos cambios

## Results and Analysis

Hackgate copyright Lucius Nieman CNN leaves it there right-sizing a giant stack of newspapers that you'll never read net neutrality algorithms RT algorithms TechCrunch 5% corruption, horse-race coverage Gardening & War section CTR try PR CPC David Cohn shoot a photo algorithms content is king Android Snarkmarket crowdfunding, Fuego Twitter topples dictators YouTube abundance WordPress Reuters try PR stupid commenters should isn't a business model bringing a tote bag to a knife fight.

{% include gallery caption="This is a sample gallery to go along with this case study." %}

## Conclusions

## References

[^Huang2001]: E, W. & Huang, Z., 2001. Matching Conditions in Atomistic-Continuum Modeling of Materials. _arXiv.org_, (13), p.135501. Available at: [http://arxiv.org/abs/cond-mat/0106615v1](http://arxiv.org/abs/cond-mat/0106615v1){:target="_blank"}.
