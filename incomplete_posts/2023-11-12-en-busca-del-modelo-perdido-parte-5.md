---
title: "En Busca del Modelo Perdido - Parte 5: Afinando el Random Forest"
layout: single
author_profile: true
related: true
comments: true
toc: false

header:
  image: /assets/images/PAES_prediction_model/RandomForestComplex.jpg
  teaser: /assets/images/PAES_prediction_model/RandomForestComplex_teaser.jpg

categories:
  - Machine Learning
  - Aprendizaje Automático
  - Data Science
  - Ciencia de Datos
  - Educational Data Mining
  - Minería de Datos Educativos

tags:
  - Random Forest
  - Validación Cruzada
  - Optimización de Modelos
  - Predicción de Resultados
  - PAES
  - Enseñanza
---

<div align="justify" markdown="1">
Continuando nuestra exploración en el mundo del análisis de datos, nos enfrentamos ahora al desafío de afinar nuestro modelo de Random Forest. En este capítulo, nos centramos en entender mejor las decisiones detrás de nuestra programación y el impacto que tienen en los resultados finales.

## 🎓 Comprendiendo el Porqué Detrás del Código 🎓

Cada línea de código en un análisis de datos tiene un propósito y puede influir significativamente en el resultado final. Es esencial entender el 'porqué' detrás de cada función y parámetro para ser capaz de confiar y explicar los resultados de nuestro modelo.

Para no olvidar nuestro trabajo hasta ahora, te comparto el código que dejamos en el capítulo 3:

<div align="center" markdown="1">
[Revisar el código aquí](https://gist.github.com/daniavm/2b929e13e7438d3d40123a43149d40ff.js)
</div>

A pesar de ser un código que entrega resultados prometedores, aún nos falta saber si es posible acercarnos a un nivel de confiabilidad superior y conciente. Para lograr esto último, comenzaremos entonces por analizar las piezas de código que son fundamentales. 

### ¿Por qué dividimos los datos?

```python
from sklearn.model_selection import train_test_split

# Dividimos los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

La función '***train_test_split***' es una herramienta que divide nuestros datos en dos partes: un conjunto para entrenar nuestro modelo y otro para probarlo. El test_size=0.2 significa que el 20% de los datos se reservan para probar el modelo, mientras que el resto se utiliza para el entrenamiento. Pero, ¿por qué 20% y no otro número? Elegir el tamaño del conjunto de prueba es una decisión que puede afectar la precisión de nuestras predicciones. Un conjunto de prueba demasiado pequeño puede no capturar la variabilidad de los datos, mientras que uno demasiado grande podría no dejar suficientes datos para entrenar el modelo adecuadamente.

### La Importancia de 'n_estimators' y 'random_state'

```python
from sklearn.ensemble import RandomForestRegressor

# Creamos el modelo de Random Forest
model = RandomForestRegressor(n_estimators=100, random_state=42)
```

El parámetro ***n_estimators*** determina cuántos árboles incluir en nuestro bosque. Cien árboles es un buen punto de partida, pero no hay una respuesta única para todos los casos. Necesitamos equilibrar la complejidad del modelo con la capacidad de generalizar bien a nuevos datos.

El ***random_state*** es nuestra semilla de aleatoriedad. Utilizar un número fijo, como 42, garantiza que si repetimos el análisis obtendremos los mismos resultados. Esto es crucial para la reproducibilidad de nuestro estudio.


## 🔍 Refinando la Validación del modelo: Superando la División Estática 🔍

La división estándar de los datos en un 80% para entrenamiento y un 20% para pruebas no siempre captura la complejidad y variabilidad inherentes en nuestro conjunto de datos. Para mejorar nuestra evaluación del modelo y asegurarnos de que es robusto y confiable, implementamos la validación cruzada.

```python
from sklearn.model_selection import cross_val_score, KFold

# Configuramos la validación cruzada
kf = KFold(n_splits=5)
cross_val_scores = cross_val_score(model, X, y, cv=kf)
```

La función '***KFold***' de '***sklearn***' nos permite dividir el conjunto de datos en múltiples segmentos o 'folds'. A diferencia de una única división de entrenamiento/prueba, la validación cruzada evalúa el modelo en varias rondas, utilizando cada vez un segmento diferente como conjunto de prueba y el resto como entrenamiento. Esto garantiza que cada muestra de los datos se utilice tanto para entrenar como para validar el modelo, dándonos una medida más fiable de su rendimiento y evitando que ciertas peculiaridades de los datos influyan de manera desproporcionada en los resultados.

## 📐 Analizando el Error Absoluto Medio (MAE) 📐

Una parte esencial en la afinación de nuestro modelo Random Forest es la elección de cuántos 'folds' o particiones usar en la validación cruzada. Esta decisión puede influir significativamente en la confiabilidad de las predicciones que hacemos. Para guiar esta elección, recurrimos al Error Absoluto Medio (MAE), que nos ofrece una medida directa de cuánto se desvían nuestras predicciones de los valores reales.

El MAE es la diferencia promedio entre el valor predicho y el valor real. En otras palabras, nos dice cuánto se equivoca nuestro modelo, en promedio, en las predicciones que hace. Un MAE bajo indica que nuestras predicciones son precisas, mientras que un MAE alto sugiere que podríamos estar bastante lejos del objetivo.

### Explorando el número óptimo de 'folds'

Para encontrar el número óptimo de 'folds', realizamos un experimento iterando a través de un rango de valores y calculando el MAE para cada uno. Aquí está el fragmento de código que lleva a cabo esta tarea:

```python
from sklearn.model_selection import cross_val_score, KFold
from sklearn.ensemble import RandomForestRegressor

# Experimento con diferentes cantidades de 'folds'
for fold in range(2, 80):
    # Configuramos el KFold con el número actual de 'folds'
    kf = KFold(n_splits=fold)
    
    # Inicializamos el modelo Random Forest con 100 estimadores
    model = RandomForestRegressor(n_estimators=100)
    
    # Calculamos el MAE para el número actual de 'folds'
    # Usamos la validación cruzada para asegurarnos de que el cálculo del MAE es robusto
    mae_score = -cross_val_score(model, X, y, cv=kf, scoring='neg_mean_absolute_error').mean()
    
    # Imprimimos el número de 'folds' y el MAE correspondiente
    print(f"{fold} folds: MAE = {mae_score}")
```

Cada iteración del bucle **'for'** configura un nuevo objeto **'KFold'** con un número diferente de 'folds', que luego se utiliza para evaluar el modelo Random Forest. La función cross_val_score se emplea aquí para realizar la validación cruzada, y le pasamos el scoring parameter como '**neg_mean_absolute_error**' porque queremos calcular el MAE negativo; lo negamos (multiplicamos por -1) para convertirlo en un valor positivo que podemos interpretar fácilmente.

### Interpretando los Resultados con Visualizaciones

Tras realizar el experimento y calcular el MAE para cada número de 'folds', es hora de interpretar los resultados. Una forma efectiva de hacerlo es a través de la visualización de datos. Los gráficos nos permiten ver tendencias y patrones que pueden no ser evidentes solo con los números.

#### Visualización del MAE y el Número de Folds

El siguiente código nos da una representación gráfica de cómo el MAE varía con el número de 'folds' utilizado en la validación cruzada:

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Gráfico de MAE promedio en función del número de folds
plt.figure(figsize=(10, 6))
sns.lineplot(x=num_folds_range, y=mae_scores_mean, marker='o')
plt.xlabel('Número de Folds de Validación Cruzada')
plt.ylabel('Error Absoluto Medio (MAE) Promedio')
plt.title('Análisis del Número de Folds en Validación Cruzada (Paralelizado)')
plt.grid()
plt.show()
```

En este gráfico de líneas, cada punto representa el MAE promedio para un número específico de 'folds'. Lo que buscamos es una línea que tienda a estabilizarse, indicando que hemos alcanzado un punto en el que aumentar el número de 'folds' no mejora significativamente el MAE. Encontrar este punto de equilibrio nos ayuda a evitar el sobreajuste y el subajuste, garantizando que nuestro modelo sea generalizable.

# Experimento con diferentes cantidades de estimadores y 'folds'
for fold in range(2, 80):
    kf = KFold(n_splits=fold)
    model = RandomForestRegressor(n_estimators=100)
    mae_score = -cross_val_score(model, X, y, cv=kf, scoring='neg_mean_absolute_error').mean()
    print(f"{fold} folds: MAE = {mae_score}")


El bucle for en Python nos permite probar una serie de valores en un proceso iterativo, lo cual es ideal para experimentar con diferentes configuraciones de nuestro modelo. Aquí, estamos buscando el 'fold' óptimo que minimice el Error Absoluto Medio (MAE), una medida de qué tan lejos están nuestras predicciones de los valores reales.

## El Viaje hacia un Modelo Más Preciso
Al final, lo que buscamos es un modelo que nos ofrezca predicciones confiables. Para llegar a esto, hemos refinado nuestro Random Forest y ahora miramos hacia los resultados reales.

# Visualización de los resultados del modelo
plt.figure(figsize=(10, 6))
plt.scatter(y, y_pred, alpha=0.5)
plt.xlabel('Valores Reales de PAES')
plt.ylabel('Predicciones de PAES')
plt.title('Comparación de Valores Reales y Predicciones')
plt.grid()
plt.show()


Esta visualización es crucial. Al comparar los valores reales y las predicciones con un gráfico de dispersión, podemos ver visualmente la precisión de nuestro modelo. Si los puntos se alinean cerca de una línea imaginaria diagonal, nuestro modelo está en buen camino.

## 🎓 Lecciones Aprendidas y Camino a Seguir 🎓
Este capítulo nos ha llevado a través de una exploración detallada de cómo ajustar nuestro modelo de Random Forest. Hemos aprendido que cada parámetro cuenta su propia historia y que solo a través de la comprensión y la experimentación podemos esperar acercarnos a la verdad detrás de nuestros datos.

En la próxima etapa de nuestro viaje, continuaremos afinando nuestro modelo, siempre con la mente abierta y dispuestos a aprender de los datos que tenemos entre manos.

Hasta entonces, nos vemos en el próximo cronopunto del Principia 🥚.

DV

</div>