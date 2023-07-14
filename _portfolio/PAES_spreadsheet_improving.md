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

1. Permitía <b>**registrar**</b> los resultados de los ensayos rendidos cada mes para cada estudiante. Estos resultados eran únicamente las respuestas correctas de cada ensayo.
2. **Semaforiza** (poner en colores) los distintos resultados para identificar visualmente poblaciones de estudiantes en un set de 4 rangos de puntajes (rojo, amarillo, verde y azul) en cada una de las pruebas de cada mes.
3. **Clasifica** los resultados de acuerdo a grupos de trabajo, que a su vez estan asociados a un docente en específico.
4. **Clasifica** los puntajes de cada estudiante de utilizando los filtros de Excel
5. **Calcula** variables de tendencia central básicas como la media de los resultados que se van acumulando para así relacionarlo con las metas propuestas por el colegio para cada prueba.
6. **Identifica** estudiantes que pueden tener un desempeño que requiera atención particular. 
7. **Convierte** el puntaje obtenido (a partir de las respuestas correctas) a puntaje PAES usando unas tablas de conversión en hojas ocultas.

A partir de estas características también se solicitó información respecto de l

A partir de esta información y teniendo el archivo de la planilla utilizada el año 2022 como referencia se procedió a implementar los siguientes cambios.

1. Corregir el sistema de clasificación en 4 rangos de respuestas correctas (RC) respondidas en cada ensayo
2. Ingresar la prueba M2 a la estructura general de análisis (esto no estaba debido ya que dicha prueba apareció posterior a la construcción de la planilla inicial así que tenía su propio entorno de trabajo diferente de las otras pruebas)
3. Mantener las funciones originales de análisis que incluian la semaforización de los puntajes obtenidos, la clasificación de los puntajes por grupos de trabajo (asociados a distintos profesores)

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
