---
title: "En Busca del Modelo Perdido - Parte 4: Los Secretos del Random Forest"
layout: single
author_profile: true
related: true
comments: true
toc: false

header:
  image: /assets/images/PAES_prediction_model/RandomForestBanner.jpg
  teaser: /assets/images/PAES_prediction_model/RandomForestBanner.jpg

categories:
  - Machine Learning
  - Aprendizaje Automático
  - Data Science
  - Ciencia de Datos
  - Model Building
  - Construcción de Modelos
tags:
  - Random Forest
  - Bosque Aleatorio
  - Decision Trees
  - Árboles de Decisión
  - Machine Learning Models
  - Modelos de Aprendizaje Automático
  - Model Evaluation
  - Evaluación de Modelos
  - Feature Engineering
  - Ingeniería de Características
  - Python Programming
  - Programación en Python
  - Data Preprocessing
  - Procesamiento de Datos
  - Data Analysis
  - Análisis de Datos

---

<div align="justify" markdown="1">

Hemos llegado a un emocionante punto en nuestra búsqueda para encontrar el modelo perdido que prediga los resultados de la PAES. En nuestro último capítulo, exploramos cómo utilizar ChatGPT para generar código de Random Forest, una técnica poderosa en el aprendizaje automático.

Si aún no has leíd@ el capítulo anterior, te invito a [echarle un vistazo](https://daniavm.github.io/machine%20learning/en-busca-del-modelo-perdido-parte-3/) para obtener una visión general de cómo ChatGPT nos ayudó a dar los primeros pasos en la creación de nuestro modelo predictivo.

## 🌲🌲 Explorando el Random Forest 🌲🌲

Ahora, nos tomaremos un descanso en el recorrido para profundizar en la técnica de Random Forest. Imagina que estás en medio de un bosque rodeado de árboles que, en lugar de solo estar vivos, cada uno de ellos representa una versión única de tu búsqueda en la travesía hacia el modelo perdido. Las raíces, ramas y hojas representan de alguna manera las decisiones que has tomado en los distintos puntos de tu travesía y cada árbol termina siendo una historia de lo que hiciste en cada camino tomado.

Si no te queda del todo claro, bueno, ese es uno de los motivos por los cuales construir esta publicación. Es decir, la idea de hacernos un poco más conocedoræs de estas representaciones para usarlas en casos reales.

### 🌳 Nodos y Ramificación 🌳

En este espeso bosque de decisiones, cada versión de ti comienza en lo que llamamos el nodo raíz. En este momento, eres tú quien está en el bosque, y te enfrentas a una encrucijada crucial en tu búsqueda del modelo perdido. En este punto inicial donde debes tomar una decisión se dice que te encuentras en un nodo dispuesto a ramificarse. Las ramas serán aquellos posibles caminos que pudiste tomar o que tomaste.

**Ejemplo:** Te encuentras en el nodo raíz del primer árbol de decisión. Aquí, enfrentas la primera decisión clave: ¿Por dónde comenzar tu búsqueda? ¿Tomar el camino de la derecha, que parece más transitado, o aventurarte a explorar el camino menos recorrido junto al riachuelo? Esta elección da lugar a tu primera rama en el árbol de decisiones.

A medida que avanzas en tu búsqueda, te enfrentarás a una serie de decisiones como "¿Debería recopilar más datos?" o "¿Qué enfoque debo utilizar para construir el modelo?". Cada uno de estas decisiones representa un nodo en nuestro **árbol de decisión**.

### 🌿 Poda y Ramas 🌿

Para mantener tus árboles de decisiones saludable, a menudo realizas una técnica llamada poda. La poda implica eliminar caminos que no son útiles o que pueden causar confusión en tu búsqueda. Esto ayuda a que tu bosque de decisiones sea más eficiente y preciso (recuerda que a nivel de la programación, mientras menos procesos innecesarios incluyas más rápido procesará tu algoritmo).

Cada camino que creas desde el nodo raíz hasta una hoja se llama una rama o un sub-árbol. Cada rama es un camino diferente que podrías tomar en tu búsqueda en busca del modelo perdido.

**Ejemplo:** Al seguir tu elección inicial del camino de la derecha, te das cuenta de que algunas de las decisiones que tomaste no te acercaron al modelo perdido. De hecho te podrían haber llevado a un precipicio cno la única opción de devolverte. Situaciones como esa son en las que optas por podar esas decisiones inútiles, dejando solo las que realmente importan en tu búsqueda... aquellas que conducen a tu objetivo.

### 🌳 PMadres e Hij@s: La Jerarquía del Bosque 🌳

Dentro de nuestro árbol de decisiones, los nodos forman una jerarquía, similar a una familia o una organización. Cada nodo de decisión tiene un rol específico, y algunos actúan como nodos padres, mientras que otros son nodos hijos. 

### Nodos Padres

Estos nodos son como tus mentores o supervisores en tu búsqueda. En lugar de tomar decisiones directamente, guían tu camino y dirigen tus acciones. Son responsables de dividir el camino en múltiples opciones, creando así nodos hijos que representan diferentes rutas que puedes seguir.

### Nodos Hijos

Los nodos hij@s son como tus compañeros de viaje. Están conectados a los nodos pmadres a través de caminos, lo que significa que sigues las indicaciones de un nodo pmadre para llegar a un nodo hij@. Cada nodo hij@ representa una elección específica que puedes hacer en tu búsqueda en busca del modelo que andas buscando.

Como dato interesante, creo que podrás notar que un nodo hij@ puede convertirse en un nodo pmadre para así abrir paso a nuevos hij@s. Todo dependerá de la cantidad de posibilidades que te ofrezca el camino (lo que en un caso práctico representarán los datos que has extraido, ya que por cada uno de esos valores alguien tuvo que tomar la decisión de medirlos ¿no?).

**Ejemplo:** Imagina que estás en el bosque y llegas a un cruce de caminos. En este punto, te encuentras con un "nodo pmadre" que te ofrece tres opciones: tomar el camino de la izquierda, seguir el camino recto o aventurarte por el camino de la derecha. Cada uno de estos caminos está representado por un nodo hij@. Sigues uno de estos caminos según la elección que hagas en ese nodo pmadre.


## 🌳🌳 Parámetros n_estimators y random_state 🌳🌳

La historia que sea que se cuente se puede representar en cada uno de estos árboles, por lo que cada uno de ellos es como una bitácora o un diario de vida que habla de la travesía que alguien que tuvo éxito o fracasó en su búsqueda. Si tuvieramos la posibilidad de tomar al azar una cierta cantidad de estos diarios, entonces tendríamos una idea de cuantos lograron llegar al modelo y cuántos no. 

Hablando un poco ahora de programación, hemos de recordar algo del código mostrado en la publicación anterior. Uno de los parámetros más importantes es `n_estimators`, que determina cuántos de estos "diarios" de decisiones debes considerar en tu bosque. Cada diario representa una versión única de tu búsqueda cuando avanzas hacia el modelo perdido.

**Ejemplo:** Imagina que mientras avanzas en tu búsqueda, decides llevar varios diarios para documentar todas tus decisiones. ¿Cuántos diarios necesitas para obtener una imagen precisa de tus acciones y decisiones para llegar a tu objetivo? En esta situación, determinar la cantidad de diarios es análogo a saber la cantidad de árboles de deberás considerar para tomar tus decisiones.

En la misma línea del código, otro parámetro importante es `random_state`, que se encarga de controlar la aleatoriedad en la creación de tus diarios de decisiones.

**Ejemplo:** Si configuramos `random_state` en 42, tus diarios siempre seguirán el mismo patrón de decisiones (elegirás siempre los mismos "diarios"). Esto es útil cuando deseas comparar resultados o depurar el modelo de manera consistente. En csao de que busques una elección distinta de "diarios", entonces no defines este parámetro.


## 🌟🌟 En Resumen: Navegando el Bosque de Random Forest 🌟🌟

Así como un aventurero toma decisiones cruciales para encontrar el tesoro perdido, Random Forest toma decisiones basadas en los datos para construir un modelo poderoso. Cada nodo, rama, hoja y diario representa una elección y una conclusión. La jerarquía de nodos padres e hijos organiza el camino en el bosque de decisiones.

Como verás, el modelo creado no tiene pre-establecida la idea de que debe haber un comportamiento específico en los datos, lo que lo hace tremendamente versatil a muchas situaciones de las cuales no podemos reconocer algún patrón en específico. 

Mientras exploramos el Random Forest, ten en cuenta que no seguimos un solo árbol de decisión, sino un bosque completo de ellos. Cada árbol ofrece su propia perspectiva sobre cómo alcanzar nuestro objetivo.

<img src="{{https://daniavm.github.io}}{{ site.baseurl }}/assets/images/PAES_prediction_model/modelo_perdido_cap4_analogia.gif" alt="">

<div align="right" markdown="1">

_Hasta el próximo cronopunto del Principia 🥚._

DV

</div>

---

</div>
