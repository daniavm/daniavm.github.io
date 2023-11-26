---
title: "En Busca del Modelo Perdido - Parte 6: La Primera Reliquia"
layout: single
author_profile: true
related: true
comments: true
toc: false

sidebar:
  nav: "modelo_perdido"

classes: wide

header:
  image: /assets/images/PAES_prediction_model/RandomForestBanner.jpg
  teaser: /assets/images/PAES_prediction_model/RandomForestBanner.jpg

categories:
  - Machine Learning

tags:
  - Random Forest
  - Validación Cruzada
  - Optimización de Modelos
  - Predicción de Resultados
  - PAES
  - Aprendanza
  - Data Science
  - Aprendizaje Automático
  - Data Analysis

---
<div align="justify" markdown="1">
La odisea continúa en "En Busca del Modelo Perdido", y en este episodio, titulado "La Primera Reliquia", desvelamos un hallazgo crucial en nuestro viaje hacia un modelo robusto de predicción de resultados de la PAES a nivel escolar.

## 🧭 Descifrando el Mapa hacia la Primera Reliquia 🗺️

Nuestro viaje en el universo del análisis de datos nos lleva a un descubrimiento esencial: la afinación precisa de nuestro modelo Random Forest. Al profundizar en los secretos de la programación y sus impactos, hemos dado con la primera reliquia: una configuración óptima de parámetros que marca el camino hacia predicciones confiables.

### 🌟 El Desafío de los Parámetros: `n_estimators` y `num_folds`

El corazón de nuestra indagación se centra en dos parámetros cruciales: `n_estimators` y `num_folds` en la validación cruzada. La elección no es trivial, ya que cada ajuste puede influir significativamente en la precisión y eficiencia de nuestro modelo.

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score, KFold

# Configuramos la validación cruzada y el Random Forest
kf = KFold(n_splits=5)
model = RandomForestRegressor(n_estimators=800, random_state=42)
```

La decisión de 800 árboles y 5 folds no fue aleatoria. Después de una exhaustiva experimentación, representada en un mapa de calor, identificamos que esta combinación proporcionaba un balance ideal entre precisión (bajo MAE) y generalización.

## 📊 Analizando el Heatmap: Una Visión Clara del MAE
El análisis del heatmap fue revelador. Mostró cómo diferentes combinaciones de n_estimators y num_folds afectan el Error Absoluto Medio (MAE). Nuestra elección de 800 y 5, respectivamente, destacó por ofrecer un MAE sustancialmente bajo, lo que indica una alta precisión en las predicciones.

<figure style = "float: center; width: 100%; height: 500px; text-align: center; object-fit: contain;">
  <embed type="text/html" src="/assets/images/PAES_prediction_model/heatmap_interactivo.html" width="100%" height="100%" alt="Imagen 1: Heatmap del Análisis de MAE.">
  <figcaption>Imagen 1: Heatmap que muestra cómo varían los valores de MAE con diferentes combinaciones de 'n_estimators' y 'num_folds'.</figcaption>
</figure>


## 🧐 Justificación de la Elección: Equilibrio entre Precisión y Generalización
Nuestra elección se basa en una justificación sólida. La combinación de n_estimators=800 y num_folds=5 no solo mostró un MAE mejor que el promedio, sino que también indicó estabilidad y robustez. Esta configuración asegura que el modelo es preciso, pero también generalizable a nuevos datos, un equilibrio crucial en la ciencia de datos.

### 📐 Ajustando el Enfoque: MAE, Folds y Estimadores 📊
Continuando en nuestro periplo, el análisis de la estabilidad de los valores de folds se hizo imprescindible. Utilizamos un gráfico de dispersión para entender mejor cómo el MAE cambia con diferentes números de estimadores, enfocándonos en los folds 3, 5 y 14, que habían mostrado un comportamiento prometedor.

<figure style = "float: center; width: 100%; text-align: center;">
  <img src="/assets/images/PAES_prediction_model/folds_stability_analysis.png" width="100%"  alt="Imagen 2: Análisis de la Estabilidad de los Folds">
  <figcaption>Imagen 2: Análisis de la Estabilidad de los Folds 3, 5 y 14 en función del número de estimadores.</figcaption>
</figure>

Este análisis nos ayudó a comprender la relación entre el número de estimadores y el MAE para cada uno de estos números de folds específicos, siendo un factor determinante en nuestra elección del número de folds.

## 🌐 Patrones en el Heatmap: Folds como Factor Dominante
Al analizar el heatmap interactivo de MAE, un patrón interesante salió a la luz: la dependencia de los resultados en el número de folds. Observamos patrones horizontales claros, lo que indica que el número de folds tiene un impacto más significativo en el MAE que el número de estimadores.

Este hallazgo fue crucial para nuestro análisis. Aunque los n_estimators tienen cierta influencia, especialmente hasta el valor de 200, cualquier número más allá de este punto no parecía afectar significativamente los resultados del modelo. Esto sugiere que alcanzamos un límite en la precisión del modelo con respecto a n_estimators, y la atención debería centrarse en optimizar el número de folds para un equilibrio adecuado entre precisión y generalización.

<figure style = "float: center; width: 100%; text-align: center;">
  <embed type="text/html" src="/assets/images/PAES_prediction_model/heatmap_interactivo.html" width="100%"  alt="Imagen 3: Heatmap de Dependencia de Folds">
  <figcaption>Imagen 3: Heatmap mostrando la dependencia del MAE en el número de folds, con patrones horizontales que indican su impacto predominante.</figcaption>
</figure>

## 🛠️ Construyendo el Modelo: El Código Final 🧑‍💻

Después de un análisis detallado y la elección cuidadosa de los parámetros, procedimos a construir el modelo final de Random Forest. El siguiente código refleja la culminación de nuestros esfuerzos:

```python
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_predict, KFold
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Cargar los datos desde el archivo CSV
csv_filename = "PAES_training_set_2022_Complete - PAES_training_set_2022 - Matemáticas.csv"
data = pd.read_csv(csv_filename)

# Eliminar filas con valores faltantes
data = data.dropna()

# Convertir columnas numéricas a tipos de datos numéricos
numeric_columns = data.columns.difference(['ID', 'Curso', 'Nombre', 'PAES'])
data[numeric_columns] = data[numeric_columns].astype(float)

# Dividir los datos en características (X) y objetivo (y)
X = data.drop(['ID', 'Curso', 'Nombre', 'PAES'], axis=1)
y = data['PAES']

# Normalizar los datos
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Construir el modelo Random Forest Regressor
rf_regressor = RandomForestRegressor(n_estimators=800, random_state=42)

# Crear objeto KFold con el número de folds deseado
num_folds = 5
kf = KFold(n_splits=num_folds)

# Realizar validación cruzada con cross_val_predict
y_pred = cross_val_predict(rf_regressor, X_scaled, y, cv=kf)

# Obtener la importancia de las características
rf_regressor.fit(X_scaled, y)
feature_importances = rf_regressor.feature_importances_

# Obtener las columnas correspondientes a las características
feature_columns = X.columns

# Obtener las 5 características más importantes
top_features_indices = feature_importances.argsort()[-5:][::-1]
top_features = feature_columns[top_features_indices]
top_feature_importances = feature_importances[top_features_indices]

print("Características más importantes:")
for i, (feature, importance) in enumerate(zip(top_features, top_feature_importances)):
    print(f"{i+1}. {feature}: {importance:.4f}")

# Gráfico de valores reales vs. predicciones
plt.figure(figsize=(10, 6))
plt.scatter(y, y_pred, alpha=0.5)
plt.xlabel('Valor Real de PAES')
plt.ylabel('Predicción de PAES')
plt.title('Valores Reales vs. Predicciones')
plt.grid()
plt.show()
```

El resultado se muestra a continuación:

<figure style = "float: center; width: 100%; text-align: center;">
  <embed type="text/html" src="/assets/images/PAES_prediction_model/modelo_paes1.png" width="100%"  alt="Imagen 3: Heatmap de Dependencia de Folds">
  <figcaption>Imagen 3: Heatmap mostrando la dependencia del MAE en el número de folds, con patrones horizontales que indican su impacto predominante.</figcaption>
</figure>

Este código incorpora la normalización de los datos, el uso de Random Forest con los parámetros seleccionados y la validación cruzada. Además, proporciona una visualización de las predicciones del modelo frente a los valores reales de PAES.

## 📈 Análisis de Residuos: Comprendiendo el Error del Modelo
Para evaluar aún más el rendimiento de nuestro modelo, realizamos un análisis de residuos. Esto nos ayudó a entender dónde se concentraban los datos y a medir el nivel de error del modelo.

```python
import matplotlib.pyplot as plt
import numpy as np

# Calcula los residuos
residuos = y - y_pred

# Calcula la media y la desviación estándar de los residuos
media_residuos = np.mean(residuos)
desviacion_estandar_residuos = np.std(residuos)

# Define las líneas para las desviaciones estándar
linea_1_std = media_residuos + desviacion_estandar_residuos
linea_2_std = media_residuos + 2 * desviacion_estandar_residuos
linea_m1_std = media_residuos - desviacion_estandar_residuos
linea_m2_std = media_residuos - 2 * desviacion_estandar_residuos

# Crea una figura y un arreglo de subplots
fig = plt.figure(figsize=(16, 8))
grid = plt.GridSpec(4, 4, hspace=0.2, wspace=0.2)

# Gráfico de dispersión principal
ax_main = fig.add_subplot(grid[1:4, 0:3])
ax_x_hist = fig.add_subplot(grid[0, 0:3], sharex=ax_main)
ax_y_hist = fig.add_subplot(grid[1:4, 3], sharey=ax_main)

# Gráfico de dispersión principal
ax_main.scatter(y_pred, residuos, alpha=0.5)
ax_main.axhline(y=0, color='red', linestyle='--', linewidth=1)
ax_main.axhline(y=linea_1_std, color='green', linestyle='--', linewidth=1, label='1st Std Dev')
ax_main.axhline(y=linea_2_std, color='orange', linestyle='--', linewidth=1, label='2nd Std Dev')
ax_main.axhline(y=linea_m1_std, color='green', linestyle='--', linewidth=1)
ax_main.axhline(y=linea_m2_std, color='orange', linestyle='--', linewidth=1)

# Áreas sombreadas entre las desviaciones estándar en el eje Y
ax_main.fill_betweenx([linea_m2_std, linea_2_std], min(y_pred), max(y_pred), color='orange', alpha=0.04, label='-2nd--1st Std Dev')
ax_main.fill_betweenx([linea_m1_std, linea_1_std], min(y_pred), max(y_pred), color='green', alpha=0.1, label='1st-2nd Std Dev')

ax_main.set_xlim([min(y_pred), max(y_pred)])  # Ajusta los límites del eje X
ax_main.set_xlabel('Predicción de PAES')
ax_main.set_ylabel('Residuos')
ax_main.legend()

# Histograma en el eje X (predicciones)
ax_x_hist.hist(y_pred, bins=30, edgecolor='k')
ax_x_hist.set_xlabel('Predicción de PAES')

# Histograma en el eje Y (residuos)
ax_y_hist.hist(residuos, bins=30, orientation='horizontal', edgecolor='k')
ax_y_hist.set_ylabel('Residuos')

plt.show()
```

<figure style = "float: center; width: 100%; text-align: center;">
  <embed type="text/html" src="/assets/images/PAES_prediction_model/residuos_paes1.png" width="100%"  alt="Imagen 3: Heatmap de Dependencia de Folds">
  <figcaption>Imagen 3: Heatmap mostrando la dependencia del MAE en el número de folds, con patrones horizontales que indican su impacto predominante.</figcaption>
</figure>

Este análisis gráfico nos proporciona una perspectiva detallada de la distribución de los errores de nuestro modelo, permitiéndonos identificar patrones y áreas de mejora.

## 🚀 Hacia el Futuro: La Importancia de la Primera Reliquia
Este descubrimiento, la Primera Reliquia, no es solo un paso en nuestra saga, sino una base sólida para futuras exploraciones. Con un modelo bien afinado, estamos más cerca de desvelar los secretos de la PAES y su predicción a nivel escolar.

En el próximo capítulo, continuaremos nuestra aventura, llevando nuestra Primera Reliquia hacia nuevos horizontes y desafíos. Manténganse atentos, aprendanzantes, la búsqueda continúa...

<div align="right" markdown="1">
Hasta el próximo cronopunto del Principia 🥚.

DV

</div>
</div>