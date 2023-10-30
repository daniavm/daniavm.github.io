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
  - Artificial Intelligence
  - Inteligencia Artificial
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

## 🌲🌲 Random Forest: Un Bosque de Decisiones 🌲🌲

Ahora, profundicemos en la técnica de Random Forest. Imagina que estás en medio de un emocionante bosque lleno de árboles de decisiones, donde cada árbol representa una versión única de tu búsqueda en busca del modelo perdido. Pero, en lugar de árboles viv@s, estos son como descripciones de las decisiones que podrías tomar mientras avanzas en tu búsqueda.

### 🌳 Nodos y Ramificación 🌳

En este espeso bosque de decisiones, cada versión de ti comienza en lo que llamamos el nodo raíz. En este moment@, eres tú quien está en el bosque, y te enfrentas a una encrucijada crucial en tu búsqueda del modelo perdido.

**Ejemplo:** Te encuentras en el nodo raíz del primer árbol de decisión. Aquí, enfrentas la primera decisión clave: ¿Por dónde comenzar tu búsqueda? ¿Tomar el camino de la derecha, que parece más transitado, o aventurarte a explorar el camino menos recorrido junto al riachuelo? Esta elección da lugar a tu primera rama en el árbol de decisiones.

A medida que avanzas en tu búsqueda, tomas una serie de decisiones, como "¿Debería recopilar más datos?" o "¿Qué enfoque debo utilizar para construir el modelo?".

### 🌿 Poda y Ramas 🌿

Para mantener tu bosque de decisiones saludable, a menudo realizas una técnica llamada poda. La poda implica eliminar caminos que no son útiles o que pueden causar confusión en tu búsqueda. Esto ayuda a que tu bosque de decisiones sea más eficiente y precis@.

Cada camino que creas desde el nodo raíz hasta una hoja se llama una rama o un sub-árbol. Cada rama es un camino diferente que podrías tomar en tu búsqueda en busca del modelo perdido.

**Ejemplo:** Al seguir tu elección inicial del camino de la derecha, te das cuenta de que algunas de las decisiones que tomaste no te acercaron al modelo perdido. Decides podar esas decisiones inútiles, dejando solo las que realmente importan en tu búsqueda.

## 🌳 PMadres e Hij@s: La Jerarquía del Bosque 🌳

Dentro de nuestro bosque de decisiones, los nodos de decisión forman una jerarquía, similar a una familia. Cada nod@ de decisión tiene un rol específico, y algun@s actúan como nod@s pmadre@s, mientras que otr@s son nod@s hij@s.

### Nod@s PMadres

Est@s nod@s son como tus mentor@s o supervisor@s en tu búsqueda. En lugar de tomar decisiones directamente, guían tu camino y dirigen tus acciones. Son responsables de dividir el camino en múltiples opciones, creando así nod@s hij@s que representan diferentes rutas que puedes seguir.

### Nod@s Hij@s

L@s nod@s hij@s son como tus compañer@s de viaje. Están conectad@s a l@s nod@s pmadre@s a través de caminos, lo que significa que sigues las indicaciones de un nod@ pmadre para llegar a un nod@ hij@. Cada nod@ hij@ representa una elección específica que puedes hacer en tu búsqueda en busca del modelo perdido.

**Ejemplo:** Imagina que estás en el bosque y llegas a un cruce de caminos. En este punto, te encuentras con un nod@ pmadre que te ofrece tres opciones: tomar el camino de la izquierda, seguir el camino recto o aventurarte por el camino de la derecha. Cada un@ de est@s caminos está representad@ por un nod@ hij@. Sigues un@ de est@s caminos según la elección que hagas en ese nod@ pmadre.

La magia del Random Forest radica en que puedes crear much@s de est@s árboles de decisiones, cada un@ con su propia jerarquía única de nod@s pmadre@s e hij@s. Luego, el Random Forest combina est@s jerarquías para obtener una visión completa de tus acciones y decisiones en busca del modelo perdido.

## 🌳🌳 Parámetros n_estimators y random_state 🌳🌳

Uno de los parámetros más importantes es `n_estimators`, que determina cuánt@s de est@s diarios de decisiones debes crear en tu bosque. Cada diario representa una versión única de tu búsqueda en busca del modelo perdido.

**Ejemplo:** Imagina que mientras avanzas en tu búsqueda, decides llevar vari@s diarios para documentar tus decisiones. ¿Cuánt@s diarios necesitas para obtener una imagen precisa de tus acciones y decisiones?

Otro parámetro importante es `random_state`, que se encarga de controlar la aleatoriedad en la creación de tus diarios de decisiones.

**Ejemplo:** Si configuramos `random_state` en 42, tus diarios siempre seguirán el mismo patrón de decisiones. Esto es útil cuando deseas comparar resultados o depurar el modelo de manera consistente.

## 🌟🌟 En Resumen: Navegando el Bosque de Random Forest 🌟🌟

Así como un aventur@r toma decisiones cruciales para encontrar el tesoro perdido, Random Forest toma decisiones basadas en los datos para construir un modelo poderos@. Cada nod@, rama y nod@ terminal representa una elección y una conclusión. La jerarquía de nod@s pmadre@s e hij@s organiza el camino en el bosque de decisiones.

Mientras exploramos el Random Forest, ten en cuenta que no seguimos un sol@ árbol de decisión sino un bosque complet@ de ell@s. Cada árbol ofrece su propia perspectiva sobre cómo alcanzar nuestro objetivo.

<div align="right" markdown="1">

_Hasta el próximo cronopunto del Principia 🥚._

DV

</div>

---

</div>

