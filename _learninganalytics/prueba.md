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
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png
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
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/entorno_envio_reportes.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/entorno_envio_reportes.png
    alt: "placeholder image 14"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_1.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_1.png
    alt: "placeholder image 15"
  - url: /assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_2.png
    image_path: /assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_2.png
    alt: "placeholder image 16"

---
## Introduction

<div align="justify" markdown="1">
En cada colegio de educación media, es común tener un plan de trabajo para analizar los datos de los estudiantes de 4° medio, especialmente cuando se trata de las pruebas de ingreso a la educación superior (PAES). Identificar características comunes y mejorar este tipo de herramientas ha sido mi objetivo principal. Mi proyecto se centra en crear funciones que proporcionen información valiosa para la toma de decisiones pedagógicas y disminuir los tiempos de trabajo de mis pares .

## Abordando el problema

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
	<figcaption>Galería 1: Imágenes que describen algunas de las funciones antes mencionadas de la planilla original trabajada. Las imágenes restantes se incluyen en la galería al final de este artículo.</figcaption>
</figure>

## Mi Propuesta

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


### Configuración de Parámetros

En esta hoja, mi enfoque fue reunir los parámetros más importantes para establecer la estética y clasificación visual de los elementos en los análisis.

En las columnas A y B, se encuentran los selectores de los cursos que se mostrarán en la planilla. Estos cursos están directamente vinculados a la base de datos de estudiantes del colegio.

<figure>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png"></a>
	<figcaption><a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/settings.png" title="Hoja de Settings">Imagen 1: Hoja de la planilla modificada que permite cambiar los parámetros de clasificación de la información, resultados, grupos y elementos visuales.</a>.</figcaption>
</figure>

Además, se incluyeron dos secciones relacionadas con la cantidad de grupos de estudiantes que presentarán ciertas pruebas. Estas secciones son adaptables a cualquier contexto, incluso si solo hay un grupo de estudiantes. Aquí es posible agregar el nombre del docente a cargo de cada grupo y el nombre de la asignatura que se imparte en el colegio.

Dos herramientas para monitorear el logro de metas se incorporaron: una basada en puntajes y otra en distribución. Las metas por puntaje se refieren a un puntaje específico esperado para la generación, mientras que las metas por distribución indican la cantidad de estudiantes que se espera se encuentren en cada uno de los rangos de logro. Se agregó un parámetro de tolerancia llamado "Porcentaje de Error" para regular los resultados obtenidos a lo largo del tiempo. Por ejemplo, si un curso alcanza su meta de 750 puntos, no se considerará un logro hasta que la desviación de los resultados obtenidos no haya superado el rango de tolerancia, es decir, un 3% en este caso.

Por último, se incluyen los rangos de respuestas correctas (RC) correspondientes a cada una de las clasificaciones. Esto impactará posteriormente en la clasificación visual de los entornos de análisis.

Con esta hoja, se logra centralizar y ajustar los parámetros esenciales para el análisis de los resultados y garantizar una presentación visual clara y precisa en las siguientes etapas del proyecto.

</div>


### Clasificación de Estudiantes por Grupos

<div align="justify" markdown="1">

La siguiente hoja representa el primer entorno donde se incluyen los datos de los estudiantes y se realiza una clasificación más detallada por grupos. En esta etapa, el objetivo principal es organizar la información por grupos específicos de trabajo en el colegio.

Esta clasificación entregará información posterior respecto de cómo van evolucionando los grupos de trabajo para así tomar decisiones que tienen que ver con el desempeño docente o la redistribución de estudiantes de un grupo a otro. Esto se verá posteriormente en las hojas de cada una de las asignaturas. 

</div>

<figure>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png"></a>
	<figcaption><a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/clasificacion_grupos.png" title="Hoja de Clasificacion de Grupos">Imagen 2: Hoja de clasificación de grupos por cada una de las pruebas. Se adjunta también una clasificación para la especialidad en la prueba de ciencias. </a>.</figcaption>
</figure>




### Herramienta de Traslado de Puntajes

<div align="justify" markdown="1">
En mi opinión, una de las herramientas que ha traído la mayor reducción de horas de trabajo. El trasladador de puntajes resuelve el problema del traspaso de información a mano. En el colegio se pasaba cada uno de los puntajes una vez que se recibía de parte del corrector automático ya que los estudiantes no necesariamente estaban organizados de igual manera en la lista de un sistema y otro. Junto con eso, el cambio de una pregunta que quizás estaba mal corregida o cualquier modificación que pudiera haber en el ensayo suponía un volumen de energía invertida tremenda por parte de la persona encargada.
Aplicar esta solución redujo literalmente días de trabajo y gestión, ya que permitía tomar la información de parte del corrector, pegarla en la planilla para organizarla y finalmente trasladarla a la base de datos de manera totalmente automática.

Junto a esto se diseñó toda una interfaz gráfica a base de un botón y selectores que hacen el traslado previniendo incluso que se produzcan errores posterior al envío. Para esto último se programó en Google Sheets mensajes de confirmación para el usuario antes de hacer el traspaso.

<figure class="half">
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/trasladador.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/trasladador.png"></a>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/mensajes_ui.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/mensajes_ui.png"></a>
	<figcaption>Galería 2: Trasladador y mensajes de interfaz de usuario</figcaption>
</figure>

Como comentario complementario, resaltaré un código que agregué al script para así mantener los filtros que existen en la hoja de base de datos en caso de que los usuarios tengan algún uso en ese entorno.

</div>

{% highlight javascript linenos %}
function Macroquitadodefiltros() {
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getActiveSheet().getFilter().remove();
  spreadsheet.getRange('B4:AQ113').activate();
  spreadsheet.getRange('B4:AQ113').createFilter();
};
{% endhighlight %}


### Base de Datos de Puntajes

<div align="justify" markdown="1">

Esta hoja queda como remanente del sistema original ya que había una familiaridad con su uso de parte del colegio. Aquí se pueden hacer filtros de información por cad auno de los estudiantes de cada prueba, pero la filosofía sugerida de uso fue que realmente no había que modificar nada de esta parte ya que se encontraban las mismas herramientas en las secciones de análisis. 

<figure>
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png"></a>
	<figcaption><a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/base_datos.png" title="Hoja de Base de Datos">Imagen 3: Resultado final del entorno que rodea la planilla de Base de Datos</a>.</figcaption>
</figure>

Aquí se puede ver también una de las primeras consecuencias de los cambios en la hoja de SETTINGS, ya que cada uno de los colores mostrados en los puntajes responde a los rangos llenados en la hoja inicial.

</div>

### Análisis Personalizado para Docentes

<div align="justify" markdown="1">

En este punto la riqueza de la información se basa fundamentalmente en la organización de la información y las herrameintas que permiten los estudios en mayor detalle. En términos concretos, las mejoras aplicadas fueron las siguientes:

1. Se agregaron a las tablas anteriores los rangos de colores que se configuran desde la hoja SETTINGS (y son variables de acuerdo a esta configuración).
2. Se agregó un gráfico de crecimiento para cada uno de los rangos de logro lo que mejora la visibilización del comportamiento de la población.
3. Se agregaron indicadores para el alcance de metas. Muestra un punto rojo si aún se está lejos de la meta de distribución propuesta, verde si ya se ha alcanzado la meta esperada y amarillo si se está cerca de la meta buscada.
4. Se agregó un gráfico de distribuciones donde se muestra la meta a alcanzar.
5. Se agregó una herramienta de análisis de poblaciones para quienes deseen indagar de manera más fina en los resultados (histograma azul). Con esta herramientas se puede seleccionar el ensayo específico para hacer cortes variados en los bins del histograma. 
6. Se agregó la estadística para cada uno de los grupos de trabajo, su promedio acumulado, error en dispersión y puntaje aproximado ponderado.
7. Se clasifican los grupos "outlayer" para identificar problemas significativos.
8. Se agregó una tabla de puntajes para las asignatura correspondiente además de un gráfico de crecimiento por estudiante y una proyección lineal de los resultados a la fecha. Esta sección busca disminuir la manipulación de la hoja "Base de Datos" para así no ensuciar la información que pueda contener. 

</div>

<figure class="third">
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_asignatura.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_asignatura.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_grupal.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_grupal.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_estudiante.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/analisis_estudiante.png"></a>
	<figcaption>Galería 3: Aquí se muestran los distintos elementos incluidos en la hoja de análisis. Todos los elementos estan lligados a la hoja de SETTINGS para que haya coherencia entre la configuración y la organización visual. El histograma en azul es aquel que permite el análisis fino de poblaciones y en la tercera imagen se ven los gráficos de evolución para cada estudiante junto con su predicción lineal de los ensayos. El mismo gráfico de evolución se puede ver también en los rangos de logro para visualizar el avance de las poblaciones. </figcaption>
</figure>

### Envío masivo de reportes en PDF

<div align="justify" markdown="1">
Finalmente, una de las grandes funciones de esta planilla es la posibilidad de enviar a todos involucrados la información mínima que se requiere de estos ensayos. Se tiene la posibilidad de seleccionar de una lista previamente acordada los correos de estudiantes, apoderados, coordinadores del área de 3° y 4° medio y profesores jefes.

Esta función no existía en la planilla Excel original y sería una complicación tremenda el hacerlo en el entorno de Microsoft - más a sabiendas que el colegio requería comenzar a formentar el uso de las herramientas de Google en su comunidad-. Los beneficios que ha traido esta función son enormes desde el punto de vista de la retroalimentación y el seguimiento de los avances en estas pruebas de ensayo. El sistema permite también seleccionar a las personas a las que se decide enviar este reporte a partir de selectores que Google Sheet permite ingresar.

Junto con lo anterior, la planilla trabaja con una carpeta en Google Drive que permite almacenar cada uno de los reportes en PDF para así hacer la consulta correspondiente posterior. Todo esto de manera totalmente autónoma y automatizada. 

</div>

<figure class="third">
	<a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/entorno_envio_reportes.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/entorno_envio_reportes.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_1.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_1.png"></a>
  <a href="/assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_2.png"><img src="/assets/images/portfolio_images/spreadsheet_PAES_improve/reporte_2.png"></a>
	<figcaption>Galería 4: Aquí se muestran imagenes de lo que sería el entorno de envío de reportes.</figcaption>
</figure>


## Conclusiones

<div align="justify" markdown="1">

- Se construyó un entorno basade en Google Sheets para hacer un análisis completo de los ensayos PAES en el colegio.
- Todas las necesidades solicitadas por el colegio fueron implementadas y en conjunto con una gran cantidad de funciones y comportamientos que iban más allá de lo solicitado para así también ampliar la mirada de los alcances de la tecnología aplicada en el seguimiento de los ensayos PAES.
- Se logró una personalización de colores, metas, rangos y grupos que no depende de un programador que administre la planilla sino de quien configura la hoja SETTINGS.
- Se hizo una simplificación en la clasificación por grupos para expresar los resultados.
- Se diseñó un script que traslada los puntajes desde el corrector a la base de datos, lo que disminuyó los tiempos de trabajo en el orden de los días, simplificó el cambio de los puntajes debido a posibles errores posteriores y disminuyó los errores de traslado que se producen al hacerlo manual.
- En el entorno de análisis se agregaron gráficos de evolución por rango, histogramas de análisis fino (y variable), indicadores de alcance de metas, gráficos de avance en puntajes estudiantiles y una proyección lineal de resultados para fomentar la mirada "predictivo" en los análisis estadísticos. 
- Se reconstruyó la base de datos original para que fuese dependiente de los parámetros de SETTINGS y así el usuario no tenga que involucrarse más con funciones avanzadas de Excel (o en este caso Google Sheets). Con esto nuevamente se reducen al orden de horas los tiempos de trabajo.
- Se agregó un script que permite el envío de reportería a los involucrados del proceso de aprendizaje de estos ensayos. Con esto se da un salto importante en temas de retroalimentación, seguimiento, documentación y alfabetización digital en el colegio. 

</div>

## Proyecciones

<div align="justify" markdown="1">

A la fecha la planilla ha funcionado bien con algunas correcciones menores. Creo que a manera de mejora, trataré de implementar el análisis de items por dificultad y habilidades (que es algo que en el colegio hacen de manera regular en este tipo de ensayos pero es un elemento que no se utiliza hasta ahora). Esto podría enriquecer el análisis y también aportar nuevas variables a la toma de decisiones. 

Otro elemento que podría ser interesante a la hora de la implementación es el estudio de los grupos. Creo que hay una posibilidad de aplicar técnicas de clustering que permitiría afinar aquellos grupos de acuerdo a un estudio más complejo de variables (como k-means o similar). 

Finalmente, si bien no ha sido un estudio completamente acabado el que se aplicó en estos cambios (podría haberme aferrado a algún tipo de bibliografía que justificara mejor las modificaciones), los aportes actuales han sido notables en términos de la disminución de los tiempos de trabajo de quienes estan involucrados con el proceso seguimiento de los ensayos. La experiencia ha sido positiva por todos quienes se ha tomado algún tipo de opinión y han incluso compartido sus mejoras para poder hacer aún mejor la modificación.


</div>

## Galería de Imágenes

A continuación se muestra una galería de las imágenes utilizadas en todo este artículo.

{% include gallery caption="Imágenes que describen algunas de las funciones antes mencionadas de la planilla original trabajada." %}