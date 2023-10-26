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

Hoy en día tenemos herramientas que pueden darnos una solución bastante robusta sin tener demasiados conocimientos de programación. Una de ellas es ChatGPT que, además de ser gratuita y tremendamente versátil, creo que a estas alturas ya no hay que salir de casa sin él ... ¿o ella?

Aquí aparece una complicación. Si no tenemos grandes conocimientos de programación ¿cómo podríamos saber que lo que estamos generando con ChatGPT responde a nuestras necesidades? Por supuesto, esta pregunta nos hace dudar si tomar un curso de programación  - y hacer el trabajo con nuestras propias manos - o bien idear alguna alternativa que me permita entender lo que saldrá de ese "bicho".

El dilema es evidente, ¿ChatGPT o Yo? ... en este primer trabajo quizás la respuesta más cercana a la decisión será "ambos". 

## 🔮 Visita al oráculo  ... ChatGPT 🤖

En nuestro primer capítulo vimos la manera de trabajar un dataset que contenía la información para lograr nuestro trabajo. El archivo que contendría los datos sería en CSV y solo las columnas distintas de 'ID', 'Curso', 'Nombre' y 'PAES' serían las que construirían el modelo. Con esto en mente y el nombre del archivo, fui a preguntar a ChatGPT respecto de un modelo de random forest que literalmente me permitiera hacer una predicción de los resultados PAES.

Así que nos armamos de valor y "pronunciamos las palabras mágicas":

__"Oh gran ChatGPT, usa un archivo de CSV cuyo nombre es "__

Mientras escribo este artículo le he echado una mirada a nuestra mochila del análisis de datos y creo que cuenta con un montón de herramientas. De hecho son tantas que probablemente no podamos conocerlas todas de manera detallada hasta que no nos involucremos con ellas más seriamente. Así que haremos algo simple para iniciar ... buscaremos en Google, o mejor aún ... preguntémosle a una inteligencia artificial.

<figure style = "float: right; width: 60%; text-align: center; font-style: italic; font-size: 0.7em; text-indent: 0; margin: 0.6em; padding: 0.8em;">
  <img src="/assets/images/PAES_prediction_model/librarian_IJ.jpeg" width="60%"  alt="Albert Evansky, el bibliotecario que le dio las ipstas a Indiana Jones para su misión. Él es nuestro equivalente de Google o ChatGPT y la librería... bueno, nuestra querida internet.">
  <figcaption>Albert Evansky, el bibliotecario que le dio las pistas a Indiana Jones para su misión. Él es nuestro equivalente de Google o ChatGPT, y la librería ... bueno, sería nuestra querida internet.</figcaption>
</figure>

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




