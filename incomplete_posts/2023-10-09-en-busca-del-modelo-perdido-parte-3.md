---
title: "En Busca del Modelo Perdido - Parte 3: El Random Forest"
layout: single
author_profile: true
related: true
comments: true
toc: false

header:
  image: /assets/images/PAES_prediction_model/RandomForestBanner.jpg
  teaser: /assets/images/PAES_prediction_model/RandomForestBanner.jpg

categories:
  - Data Analysis
tags:
  - Data Analysis
  - EDA
  - Análisis de Datos Exploratorio
  - ADE
  - Exploratory Data Analysis
  - Educación
  - Modelos de regresión

---


<div align="justify" markdown="1">
Hemos llegado a una encrucijada y el camino tiende a hacerse más complejo. La información del bibliotecario no traía consigo las decisiones que tendríamos que tomar en el camino, por lo que aquí debemos echar mano a nuestra experiencia, o en caso de no tenerla, a nuestro espíritu de aventura. 

Hoy en día tenemos herramientas que pueden darnos una solución bastante robusta sin tener demasiados conocimientos de programación. Una de ellas es ChatGPT que, además de ser gratuita y tremendamente versátil, creo que a estas alturas ya no hay que salir de casa sin ella ... ¿o él?

Aquí aparece una complicación. Si no tenemos grandes conocimientos de programación ¿cómo podríamos saber que lo que estamos generando con ChatGPT responde a nuestras necesidades? Por supuesto, esta pregunta nos hace dudar si tomar un curso de programación  - y hacer el trabajo con nuestras propias manos - o bien idear alguna alternativa que me permita entender lo que saldrá de ese "bicho".

El dilema es evidente, ¿ChatGPT o Yo? ... en este primer trabajo quizás la respuesta más cercana a la decisión será "ambos". 

## 🔮 Visita al oráculo  ... ChatGPT 🤖

En nuestro primer capítulo vimos la manera de trabajar un dataset que contenía la información para lograr nuestra misión... lograr un modelo predictivo de la PAES para el 2024. El archivo que contendría los datos sería en CSV y <ins>solo las columnas distintas de 'ID', 'Curso', 'Nombre' y 'PAES' serían las que construirían el modelo</ins>. Con esto en mente y el nombre del archivo, fui a preguntar a ChatGPT respecto de un modelo de random forest que literalmente me permitiera hacer una predicción de los resultados PAES - supongo que en pedir no hay engaño -.

Así que nos armamos de valor, vamos al **[lugar del oráculo](chat.openai.com)** y "pronunciamos las palabras mágicas":

***"Oh gran ChatGPT, usa un archivo de CSV cuyo nombre es PAES_training_set_2022_Complete - PAES_training_set_2022 - Matemáticas.csv y entrega el código en python para poder predecir los resultados de la columna llamada "PAES" descartando las columnas llamadas 'ID', 'Curso' y 'Nombre' para entrenar el modelo. Usa todas las otras aplicando el método de random forest y grafica los resultados de valores reales vs valores predichos por el modelo"***

La emoción comienza a llegar a nuestro ser y tras esperar un par de segundos aparece el siguiente mensaje:

> Lamentablemente, no puedo acceder ni utilizar archivos específicos, como el archivo CSV que mencionas, ya que mi capacidad de interactuar con el entorno es limitada y mi conocimiento está basado en datos que se detienen en enero de 2022. Sin embargo, puedo proporcionarte un código genérico en Python que puedes utilizar como punto de partida para realizar la tarea que mencionaste. Solo necesitas asegurarte de cargar tu archivo CSV con los datos adecuados. Asegúrate de que tengas la biblioteca Scikit-Learn instalada para usar el modelo Random Forest. Puedes instalarlo usando pip install scikit-learn.
> _Respuesta inicial de ChatGPT_
{: style="text-align: right;"}

<script src="https://gist.github.com/daniavm/ebc450d85ec0a021d6c604096e1c2a77.js"></script>


Asombrad@s por el resultado, decidimos simplemente copiar y pegar este código en nuestro cuaderno de Jupyter dispuesto para trabajar (hablaremos de esto en otro post en caso de que te sea muy ajeno). Al hacerlo llega nuestra primer obstáculo.

## 🏗️ Construyendo la solución ⚒️

El output del código entregado por ChatGPT fue un error que se muestra en la imagen a continuación:


<img src="{{https://daniavm.github.io}}{{ site.baseurl }}/assets/images/PAES_prediction_model/error1_cap3_chatGTP.png" alt="">


Claramente el oráculo no es infalible, ya que no conoce todo el contexto de nuestros datos. Así que copiamos y pegamos este mensaje de error en el oráculo y que tenga mayor información respecto del error. Lo que nos entregó fue la siguiente respuesta:

> El error que estás viendo se debe a la presencia de valores faltantes (NaN) en tus datos. Antes de entrenar un modelo de Random Forest, debes ocuparte de manejar estos valores faltantes. Aquí hay una versión modificada del código que incluye la imputación de valores faltantes utilizando SimpleImputer de scikit-learn:
> 
> _ChatGPT tras error 1_
{: style="text-align: right;"}

<script src="https://gist.github.com/daniavm/2c0fd0da477f1e7129330282294a7d5d.js"></script>


Tras borrar el código anterior e incluir el nuevo en nuestro cuaderno Jupyter nos topamos otra vez con otro error 😔. 

<img src="{{https://daniavm.github.io}}{{ site.baseurl }}/assets/images/PAES_prediction_model/error2_cap3_chatGTP.png" alt="">

"¡Que cosa más desesperante esta!" dirán algun@s, pero lo cierto es que el proceso de construcción de una buena respuesta con ChatGPT puede tomar tanto como construir nosotr@s mism@s nuestro código desde cero si no damos los suficientes detalles al "oráculo". De hecho, puede incluso ocurrir que la respuesta no llegue hasta después de muchas iteraciones o quizás correcciones que un@ mism@ tendrá que reconocer.

Tras ingresar nuevamente el error a ChatGPT, nos entrega otra respuesta más:

> Si estás obteniendo un error que indica que "Input y contains NaN," significa que tus etiquetas objetivo (en este caso, la columna 'PAES') también contienen valores faltantes (NaN). Debes manejar los valores faltantes en las etiquetas objetivo antes de entrenar un modelo. Aquí hay una versión modificada del código que aborda este problema utilizando la imputación de valores faltantes en las etiquetas objetivo:
> 
> _ChatGPT tras error 1_
{: style="text-align: right;"}

<script src="https://gist.github.com/daniavm/9e6079b6e991562d23e9505fb9c70260.js"></script>


## 🏆 Nuestro Primer Logro 🏆

¡El código resultó! Tras dos intentos fallidos finalmente logramos ver un "output" que nos muestra un resultado interesantísimo. Además, no solo nos entregó un gráfico como le solicitamos, sino que una estimación del error en la predicción que se llamó "Error Cuadrado Medio" o "Error Cuadrático Medio" (ECM). Si no estas muy familiarizado con la estadística, basta con saber que esto nos da una estimación de qué tan bien se ajusta este modelo con los datos. 

De hecho, si calculamos la raíz cuadrada de esta valor (que aquí nos dio 1409.76) tendremos una idea más clara de cómo se ajusta el modelo ya que este valor tendrá las unidades de la variable que estamos modelando. La raíz del ECM o RMSE por sus siglas en inglés nos dio en este caso 37,54 que representaría las desviaciones que tendría este modelo predictivo con la realidad. ¿Nada mal para alguien que solo está partiendo no?

El gráfico expulsado fue este:

<img src="{{https://daniavm.github.io}}{{ site.baseurl }}/assets/images/PAES_prediction_model/modelo_perdido_cap3_plot_output.png" alt="">





La frase clave que usaré en esta oportunidad es la siguiente: "¿Cuáles son los modelos de machine learning que permiten hacer una predicción de resultados si tus datos son numéricos?". Me pareció importante mencionar lo último, ya que ***todos los datos que tenemos hasta ahora (salvo el rut, curso y nombre del estudiante) son números***. Esto ayuda a disminuir la cantidad de modelos que podrían salir una vez que le preguntemos a nuestra fuente.

El resultado que entregó una mezcla de Google con ChatGPT fue más o menos el siguiente:

1. Regresión Lineal Múltiple (Linear Regression)
2. Regresión de Ridge o Lasso (Ridge Regression o Lasso Regression)
3. Bosques Aleatorios (Random Forests)
4. Gradient Boosting (Gradient Boosting (XGBoost, LightGBM, CatBoost))
5. Redes Neuronales Artificiales (Artificial Neural Networks (Neural Networks))
6. Regresión de Vecinos más Cercanos (k-Nearest Neighbors (K-NN))

Son bastantes opciones para partir, así que deberíamos idear alguna forma para ir teniendo una noción de cuál usar primero. 

## El plan inicial 🗺️

Si te enviaran a construir una casa y nunca has hecho una, probablemente no tendrías idea de cómo responder a la pregunta de "¿cuáles son las herramientas que necesitas para construirla?". A pesar de la dificultad del asunto, creo que por nociones básicas y conocimientos previos podríamos intuir que el "martillo" sería una de las herramientas que estaría en esa lista. Esto ya es un punto de partida y disminuye la incertidumbre.

Así mismo el análisis de datos no se trata de cuál herramienta usar para encontrar "el resultado que quieres encontrar". ***Ninguna persona puede saber realmente cuál es la respuesta a esa pregunta, ya que depende del problema que quieres resolver***. Por esta misma razón no nos podemos quedar con un único modelo inicial o con un set específico de modelos, ya que el problema se va resolviendo a medida que vamos ganando experiencia de él. 

Quizás en el futuro hayamos resuelto tantos problemas del mismo tipo que intuiremos qué herramienta podríamos utilizar con un nivel de trabajo e incertidumbre menor, pero **mientras tanto debemos explorar**, y eso implica necesariamente experimentar lo que más puedamos con todo lo que tenemos. Así que probaremos idealmente todas estas herramientas para observar los resultados.

De acuerdo a lo que vimos en el artículo anterior, en este problema contaremos con unas 100 filas de datos y unos 20 campos de información por cada una, así que no es un dataset demasiado robusto. ***Esto hace que el problema del overfitting (sobreajuste) o underfitting (subajuste) esten siempre acechando*** - hablaré de estos conceptos en otro post más adelante en caso de que te hayan llamado la atención -. 

Considerando estas últimas observaciones, podría decir que ***creo que estos datos no estan del todo correlacionados entre sí y tampoco son lineales***, así que no daría demasiada importancia a los modelos 1 y 2. El modelo 6 tampoco le daría demasiada importancia al partir porque da por presupuesta una relación uno a uno de los datos y está más o menos claro que no es así. Los ensayos de PAES son secuenciales en el tiempo, así que necesitamos un modelo que estudie la evolución antes que la relación directa entre variables.

Nos quedan entonces los modelos 3, 4 y 5 de los cuales creo que no tengo ninguna razón para privilegiar el uno sobre el otro, así que solo tomaré el 3 porque es el que está primero en la lista.


### 🎒🔨 Preparando la mochila 🪓🎒

A nuestra mochila de viaje agregaremos entonces los siguientes elementos:

1. Bosques Aleatorios (Random Forests)
2. Gradient Boosting (Gradient Boosting (XGBoost, LightGBM, CatBoost))
3. Redes Neuronales Artificiales (Artificial Neural Networks (Neural Networks))

Debido a que la muestra de datos no es muy grande, agregaremos también el mecanismo de "Validación Cruzada" para prevenir el overfitting y underfitting. Después de todo, el objetivo último de la misión es descubrir un modelo predictivo para una prueba, pero debemos resguardar la idea de que tambien sea un "modelo realista" minimizando los sesgos que nos puedan acarrear los datos.

Hablaremos más de ello en la próxima publicación porque ya sabemos como deberíamos partir.


<div align="right" markdown="1">

_Hasta el próximo cronopunto del Principia 🥚._

DV

</div>


</div>




