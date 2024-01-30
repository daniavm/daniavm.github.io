---
title: "En Busca del Modelo Perdido - Parte 9: Navegando el Laberinto de Hiperparámetros de XGBoost"
layout: single
author_profile: false
related: true
comments: true
toc: false
date: 2024-01-19T11:48:41-04:00

sidebar:
  nav: "modelo_perdido"

classes: wide

header:
  image: /assets/images/PAES_prediction_model/busca_del_modelo_perdido_parte_8.png
  teaser: /assets/images/PAES_prediction_model/busca_del_modelo_perdido_parte_8.png

categories:
  - Machine Learning

tags:
  - XGBoost
  - Hiperparámetros
  - Sobreajuste
  - Validación Cruzada
  - Predicción de PAES
  - Aprendizaje Automático
  - Análisis de Datos
  - Técnicas de Boosting

---
<div align="justify" markdown="1">
En nuestra inquebrantable búsqueda del modelo perfecto para predecir los resultados de la prueba PAES, nos enfrentamos a uno de los desafíos más complejos y enigmáticos: la optimización de hiperparámetros en XGBoost. Este capítulo nos sumerge en el laberinto multidimensional de hiperparámetros, donde la mente humana lucha por visualizar la solución debido a la complejidad matemática que subyace en este problema.

## Hiperparámetros: El Laberinto Multidimensional

Imagina que te encuentras en un terreno montañoso, buscando el punto más bajo, el "mínimo", en este terreno irregular. Cada metro cuadrado representa una combinación única de hiperparámetros que influyen en el rendimiento de tu modelo. Al principio, estás en un mundo bidimensional, como un plano extenso. En este mundo, encontrar un mínimo es relativamente sencillo, pero es como explorar un corte de pastel sin saber si es el único.

Avanzas a un mundo tridimensional, donde cortas el terreno en diferentes direcciones, pero aún no puedes visualizar el paisaje completo. Esto representa el desafío de encontrar un mínimo local. Las curvas de nivel que ves son como los resultados de MAE en tu búsqueda, que miden cuán cerca estás del mínimo absoluto. El objetivo es minimizar el MAE, que representa la diferencia promedio entre las predicciones del modelo y los valores reales. Cuanto más bajo sea el MAE, más preciso será tu modelo.

Sin embargo, el MAE puede ser engañoso, ya que no garantiza el mínimo absoluto. Es como buscar el valor mínimo de una función topológica en un espacio multidimensional, donde el MAE se convierte en una guía para explorar las curvas de nivel y acercarse al mínimo.

Luego, te adentras en un mundo multidimensional, donde cada dimensión adicional representa un hiperparámetro diferente. Visualizar esto se vuelve abrumador. Es como si cortaras el terreno en diferentes direcciones, niveles y ángulos en todas las dimensiones posibles. Aquí es donde nuestra mente humana se queda atrás, incapaz de visualizar el espacio completo sin recurrir a las matemáticas o a la "fuerza bruta" de probar innumerables combinaciones de hiperparámetros.

Cada hiperparámetro es una dimensión adicional en este mundo, y encontrar el mínimo absoluto del MAE se convierte en un desafío que va más allá de la intuición humana. Es como buscar la combinación perfecta de hiperparámetros que minimice el error promedio entre las predicciones y los valores reales, lo que nos acerca cada vez más a encontrar el modelo perdido que buscamos.

En esta travesía, nos encontramos en la encrucijada de elegir entre métodos que nos ayudarán a navegar este laberinto de manera eficiente. La elección de la herramienta adecuada es fundamental, ya que nos permitirá explorar este laberinto multidimensional con inteligencia y nos acercará cada vez más a encontrar el modelo perdido que buscamos.

<figure style="width: 100%; text-align: center;">
    <embed type="text/html" src="/assets/images/simple_post_images/minimos_superficie.html" style="width: 100%; height: 500px; border: none;" alt="Imagen 1: Heatmap del Análisis de MAE.">
    <figcaption>Imagen 1 (visible en computadores): Heatmap interactivo que muestra cómo varían los valores de MAE con diferentes combinaciones de 'n_estimators' y 'num_folds'.</figcaption>
</figure>


Los Tesoros Escondidos: Nuestros Hiperparámetros

Dentro de este laberinto multidimensional, destacan los siguientes tesoros escondidos, que representan los hiperparámetros clave utilizados en nuestro código:

Learning Rate (Tasa de Aprendizaje): Controla la velocidad de ajuste del modelo a los datos.
N_Estimators (Número de Estimadores): Determina la cantidad de árboles en nuestro modelo.
Gamma: Actúa como un regulador de la complejidad del modelo.
Min Child Weight: Define un umbral para la división de nodos.
Subsample: Controla la fracción de muestras utilizadas para entrenar cada árbol.
Colsample_by:* Regula la selección de características.
Comparando Grid Search y Hyperopt

Para descifrar este laberinto de hiperparámetros, tenemos dos herramientas a nuestra disposición: Grid Search y Hyperopt. Ambos métodos buscan la combinación óptima de hiperparámetros, pero difieren en su enfoque y eficiencia.

Grid Search es como explorar sistemáticamente cada rincón del laberinto, probando todas las combinaciones posibles de hiperparámetros. Es exhaustivo pero puede ser ineficiente y requerir una gran cantidad de tiempo y recursos computacionales.

Hyperopt, por otro lado, es como un explorador inteligente que aprende de cada paso y ajusta su camino en consecuencia. Utiliza algoritmos de optimización bayesiana para encontrar la combinación óptima de hiperparámetros de manera más eficiente y efectiva.

La Elección de Hyperopt

Dada la complejidad de nuestro laberinto de hiperparámetros y la necesidad de una solución eficiente, hemos elegido Hyperopt como nuestra herramienta preferida. Su enfoque basado en la optimización bayesiana nos permite navegar este terreno con mayor precisión y rapidez. En los próximos pasos de nuestra aventura, profundizaremos en el uso de Hyperopt y descubriremos cómo esta elección nos acerca cada vez más a encontrar el modelo perdido que buscamos.

<div align="right" markdown="1">
Hasta el próximo cronopunto del Principia 🥚.

DV

</div>
</div>