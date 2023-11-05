---
title: "Optimiza el Análisis de Evaluaciones con Google Sheets"
layout: single
author_profile: true
related: true
comments: true
toc: true
toc_icon: "egg"

header:
  image: /assets/images/learninganalytics_images/script_de_clasificacion_v1/banner_script_clasificacion_1.png
  teaser: /assets/images/learninganalytics_images/script_de_clasificacion_v1/banner_script_clasificacion_1.png

categories:
  - Educación
tags:
  - Automatización
  - Evaluaciones Escolares
  - Google Sheets
  - Análisis de Datos
  - Eficiencia en la Educación

---
<div align="justify" markdown="1">
En el mundo de la educación, la clasificación de los resultados de una evaluación es una tarea crítica para visibilizar poblaciones de estudiantes de distinto desempeño y tomar decisiones informadas para brindar una educación de alta calidad. Sabemos que este proceso puede ser arduo y consumir mucho tiempo. Debido a esto he desarrollado una herramienta de automatización en Google Sheets que se centra en las necesidades de jefes de departamento, coordinadores y profesores de asignatura, y que puede traer beneficios significativos a su labor.

## Facilitando el Trabajo de Jefæs de Departamento y Coordinadoræs

Si eres un(a) coordinador(a), jefe(a) de departamento o un(a) docente de cierta asignatura en una institución educativa y deseas clasificar el rendimiento de l@s estudiantes en las evaluaciones, utiliza esta herramienta para visibilizar lo siguiente:

### Análisis Institucional

Si cuentas con una amplia cantidad de evaluaciones aplicada a distintos niveles, y necesitas un panorama general del rendimiento de la institución, esta herramienta **clasifica los resultados en niveles de logro, proporcionando una visión completa de la realidad de la jornada**. La clasificación de los desempeños por niveles de logro es una labor mínima que se tendría que hacer para identificar poblaciones dentro de l@s estudiantes y tomar decisiones, lo que este script hace de manera automática una vez que se han ingresado los datos de cada evaluación.

Junto a lo anterior también podrás ver algunos elementos estadísticos mínimos como el promedio por nivel y la cantidad de estudiantes que rindieron la evaluación. 

<figure style = "float: center; width: 100%; text-align: center; font-style: italic; font-size: 0.7em; text-indent: 0; margin: 0.6em; padding: 0.8em;">
  <a href="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_clasificacion_por_niveles.png">
    <img src="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_clasificacion_por_niveles.png" width="60%"  alt="Imagen 1: Visualización de resultados a nivel de colegio para una jornada de evaluación ficticia.">
  </a>
  <figcaption>Imagen 1: Visualización de resultados a nivel de colegio para una jornada de evaluación ficticia.</figcaption>
</figure>

### Análisis por Cursos

Si deseas profundizar en el rendimiento de los estudiantes en cursos específicos, esta herramienta te permite desglosar la información y obtener datos detallados estándares para cada curso de un nivel seleccionado. El objetivo de esto es identificar diferencias que puedan existir entre los cursos o confirmar el avance homogéneo a lo largo del tiempo.

Cabe notar que se hace la misma mirada de la información tanto en la visual institucional como por curso. Esto ayuda a entender cómo se relacionan los resultados macroeducativos con respecto a un nivel de detalle más fino (más resolución de la información). Es decir, los mismos gráficos que estan a nivel de institución, se encontrarán a nivel de cursos para ver la conexión entre ellos.

<figure style = "float: center; width: 100%; text-align: center; font-style: italic; font-size: 0.7em; text-indent: 0; margin: 0.6em; padding: 0.8em;">
  <a href="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_clasificacion_por_cursos.png">
    <img src="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_clasificacion_por_cursos.png" width="60%"  alt="Imagen 2: Visualización de resultados a nivel de cursos para una jornada de evaluación ficticia.">
  </a> 
  <figcaption>Imagen 2: Visualización de resultados a nivel de cursos para una jornada de evaluación ficticia.</figcaption>
</figure>

## Potenciando el Trabajo de Profesores de Asignatura

Supongamos que eres un(a) profesor(a) de asignatura y deseas entender mejor el desempeño de tus estudiantes en tus clases. Esta herramienta te brinda ventajas significativas como las siguientes:

### Análisis Individual de Estudiantes

Si deseas identificar a l@s estudiantes que necesitan apoyo adicional en una asignatura específica, la herramienta te permite analizar el rendimiento de cada estudiante de manera individual, lo que es fundamental para brindar una educación centrada en las necesidades de cada persona. Puedes detectar quiénes requieren apoyo adicional y así diseñar intervenciones específicas.

### Clasificación por Niveles de Logro

Una de las funciones destacadas de esta herramienta es la capacidad de clasificar por niveles de logro, que pueden basarse en porcentajes de logro (valor numérico) o colores en la planilla (valor simbólico). Esto permite una evaluación más precisa del rendimiento de los estudiantes y la toma de decisiones más informadas.

<figure style = "float: center; width: 100%; text-align: center; font-style: italic; font-size: 0.7em; text-indent: 0; margin: 0.6em; padding: 0.8em;">
  <a href="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_clasificacion_por_estudiante.png">
    <img src="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_clasificacion_por_estudiante.png" width="60%"  alt="Imagen 3: Visualización de la clasificación por niveles de logro para cada estudiante de un curso ficticio seleccionado.">
  </a>
  <figcaption>Imagen 3: Visualización de la clasificación por niveles de logro para cada estudiante de un curso ficticio seleccionado.</figcaption>
</figure>

## Complemento Perfecto para MarkQual

Esta automatización se integra perfectamente con el software de corrección y calificación de exámenes MarkQual. MarkQual permite modificar los niveles de exigencia, la nota base, calificar preguntas de desarrollo y de opciones múltiples, introducir ponderaciones variables y definir ejes temáticos. Sus funciones se adaptan perfectamente a esta planilla, lo que enriquece el proceso de clasificación de los resultados de las evaluaciones escolares.

<figure style = "float: center; width: 100%; text-align: center; font-style: italic; font-size: 0.7em; text-indent: 0; margin: 0.6em; padding: 0.8em;">
  <a href="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_markqual_integration.png">
    <img src="/assets/images/learninganalytics_images/script_de_clasificacion_v1/script_markqual_integration.png" width="60%"  alt="Imagen 4: Detalle de cómo la planilla se adapta a los datos entregados por Markqual. Los elementos mínimos que debes agregar por tu cuenta son el nivel y el curso. COmo alternativa puedes agregar el nombre de la jornada de evaluación y la fecha, auqnue esto no tiene un objetivo funcional en el script.">
  </a>
  <figcaption>Imagen 4: Detalle de cómo la planilla se adapta a los datos entregados por Markqual. Los elementos mínimos que debes agregar por tu cuenta son el nivel y el curso. COmo alternativa puedes agregar el nombre de la jornada de evaluación y la fecha, auqnue esto no tiene un objetivo funcional en el script.</figcaption>
</figure>


## Superando Obstáculos Tradicionales

Esta herramienta aborda varias dificultades que suelen encontrarse en el análisis de evaluaciones escolares. En el pasado, la clasificación y el análisis de datos podían ser procesos complicados y propensos a errores. Sin embargo, con esta automatización, esos problemas se resuelven de manera eficiente.

Por ejemplo, a menudo se requería un análisis manual que consumía tiempo y recursos valiosos. La automatización reduce significativamente la carga de trabajo y permite a los educadores centrarse en la enseñanza y el apoyo a los estudiantes, en lugar de usar su tiempo en tareas tediosas.

Además, la personalización y adaptabilidad de esta herramienta la hacen adecuada para cualquier institución educativa. Puedes ajustar los niveles de logro y los estándares de evaluación de acuerdo con las necesidades específicas de tu institución, lo que garantiza que los resultados reflejen los objetivos educativos y los criterios de calificación particulares.

## Aprende a Configurar y Utilizar la Planilla

Si deseas aprender cómo configurar y utilizar esta planilla y script, te invitamos a ver nuestro tutorial en [YouTube](https://www.youtube.com/channel/UCE9a5RZRjCwvyFlg2ORG1HA){:target="_blank"}. Este recurso te guiará paso a paso a través de la instalación y configuración, asegurando que aproveches al máximo esta herramienta.

## Descarga la Planilla

Si estás listo para optimizar el análisis de evaluaciones escolares, puedes descargar una copia de la planilla haciendo clic [aquí](https://docs.google.com/spreadsheets/d/1KiHY-vEx5T5dWo_JPikekfvFq7Bnr0rARJJ_cgjzimU/copy){:target="_blank"}. ¡Empieza a simplificar tu trabajo y aporta a una educación de más calidad!

## En Resumen

La automatización del análisis de evaluaciones escolares en Google Sheets es una herramienta esencial que se adapta a las necesidades de jefes de departamento, coordinadores y profesores de asignatura. Esta solución ahorra tiempo y esfuerzo al simplificar el trabajo de organización, lo que enriquece la enseñanza y el aprendizaje. Además, impulsa una educación centrada en el rendimiento individual de los estudiantes antes que en el abordaje genérico de acciones para motivar la aprendanza.

</div>

<div align="right" markdown="1">

_Hasta el próximo cronopunto del Principia 🥚._

DV

</div>
