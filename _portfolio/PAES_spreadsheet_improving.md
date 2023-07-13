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
[//]: < ## Introducción A lo largo de este año he dedicado grandes esfuerzos a desarrollar una herramienta que permita interpretar los registros escritos de mis estudiantes en una actividad de bitácora. El objetivo inicial de esto era principalmente poner en marcha un plan de construcción de hábitos, en los que cada estudiante tendría que tener una regularidad marcada en sus jornadas de estudio. Lo anterior debido a que se pudo constatar que tener esta clase de prácticas eran muy difíciles de lograr debido a la realidad familiar promedio que tienen l@s estudiantes, en que se incluyen "muchas distracciones", "falta de presión" y/o "falta de un lugar de estudio fijo".>

<p align="justify" markdown="1">
La labor consistía inicialmente en solo modificar o adaptar una planilla de Excel que se utilizaba en el colegio para poder hacer algunos análisis de los ensayos que se iban rindiendo por los estudiantes de 4° medio como parte del plan de preparación para la prueba PAES. 
Las funciones principales de esta planilla eran:
1. Registrar los resultados de los ensayos rendidos cada mes.
2. Corregir el sistema de clasificación en 4 rangos de respuestas correctas (RC) respondidas en cada ensayo
3. Ingresar la prueba M2 a la estructura general de análisis (esto no estaba debido ya que dicha prueba apareció posterior a la construcción de la planilla inicial así que tenía su propio entorno de trabajo diferente de las otras pruebas)
4. Mantener las funciones originales de análisis que incluian la semaforización de los puntajes obtenidos, la clasificación de los puntajes por grupos de trabajo (asociados a distintos profesores)
</p>

## The Database

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

## The Code

## Results and Analysis

Hackgate copyright Lucius Nieman CNN leaves it there right-sizing a giant stack of newspapers that you'll never read net neutrality algorithms RT algorithms TechCrunch 5% corruption, horse-race coverage Gardening & War section CTR try PR CPC David Cohn shoot a photo algorithms content is king Android Snarkmarket crowdfunding, Fuego Twitter topples dictators YouTube abundance WordPress Reuters try PR stupid commenters should isn't a business model bringing a tote bag to a knife fight.

{% include gallery caption="This is a sample gallery to go along with this case study." %}

## Conclusions

## References

[^Huang2001]: E, W. & Huang, Z., 2001. Matching Conditions in Atomistic-Continuum Modeling of Materials. _arXiv.org_, (13), p.135501. Available at: [http://arxiv.org/abs/cond-mat/0106615v1](http://arxiv.org/abs/cond-mat/0106615v1){:target="_blank"}.
