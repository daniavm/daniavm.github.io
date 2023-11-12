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

# En Busca del Modelo Perdido - Parte 5: Afinando el Random Forest

Continuando nuestra exploración en el mundo del análisis de datos, nos enfrentamos ahora al desafío de afinar nuestro modelo de Random Forest. En este capítulo, nos centramos en entender mejor las decisiones detrás de nuestra programación y el impacto que tienen en los resultados finales.

## 🎓 Comprendiendo el Porqué Detrás del Código 🎓

Cada línea de código en un análisis de datos tiene un propósito y puede influir significativamente en el resultado final. Es esencial entender el 'porqué' detrás de cada función y parámetro para ser capaz de confiar y explicar los resultados de nuestro modelo.

Para no olvidar nuestro trabajo hasta ahora, te comparto el código que dejamos en el capítulo 3:

<script src="https://gist.github.com/daniavm/2b929e13e7438d3d40123a43149d40ff.js"></script>

### ¿Por qué dividimos los datos?

```python
from sklearn.model_selection import train_test_split

# Dividimos los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

La función '***train_test_split***' es una herramienta que divide nuestros datos en dos partes: un conjunto para entrenar nuestro modelo y otro para probarlo. El test_size=0.2 significa que el 20% de los datos se reservan para probar el modelo, mientras que el resto se utiliza para el entrenamiento. Pero, ¿por qué 20% y no otro número? Elegir el tamaño del conjunto de prueba es una decisión que puede afectar la precisión de nuestras predicciones. Un conjunto de prueba demasiado pequeño puede no capturar la variabilidad de los datos, mientras que uno demasiado grande podría no dejar suficientes datos para entrenar el modelo adecuadamente.

### La Importancia de la Validación Cruzada
La validación cruzada es como un examen riguroso para nuestro modelo. En lugar de solo un test, nuestro modelo debe pasar múltiples pruebas, mejorando así su robustez y confiabilidad.


from sklearn.model_selection import cross_val_score, KFold

# Configuramos la validación cruzada
kf = KFold(n_splits=5)
cross_val_scores = cross_val_score(model, X, y, cv=kf)


KFold es una técnica que divide nuestros datos en 'k' partes, o 'folds', y luego realiza 'k' pruebas diferentes, cada una usando una parte diferente como conjunto de prueba. cross_val_score toma nuestro modelo y datos y aplica esta técnica para evaluar qué tan bien está realizando el modelo.

Explorando el Número de Estimadores y Folds
El siguiente paso fue explorar cómo el número de estimadores y 'folds' afecta el rendimiento del modelo. Este proceso es fundamental para afinar nuestro modelo y asegurar que se generalice bien a nuevos datos.

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