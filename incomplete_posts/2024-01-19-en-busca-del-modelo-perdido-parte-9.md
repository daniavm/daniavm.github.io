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

Imagina que te encuentras en un terreno montañoso, buscando el punto más bajo, el "mínimo", en este terreno irregular. Cada metro cuadrado representa una combinación única de hiperparámetros que afectan el rendimiento de tu modelo.

Al principio, estás en un mundo bidimensional, como un plano extenso. En este mundo, encontrar un mínimo es relativamente sencillo, pero es como explorar un corte de pastel sin saber si es el único.

Luego avanzas a un mundo tridimensional, donde cortas el terreno en diferentes direcciones, pero aún no puedes visualizar el paisaje completo. Aquí, encontrar un mínimo local se convierte en un desafío. Las curvas de nivel representan los resultados del MAE en tu búsqueda, midiendo cuán cerca estás del mínimo absoluto. El objetivo es minimizar el MAE, que refleja cuán preciso es tu modelo.

Sin embargo, el MAE puede ser engañoso, ya que no garantiza el mínimo absoluto. Aquí es donde entra el desafío: buscar el valor mínimo de una función topológica en un espacio multidimensional. El MAE se convierte en una guía para explorar las curvas de nivel y acercarse al mínimo.

Finalmente, te adentras en un mundo multidimensional, donde cada hiperparámetro es una dimensión adicional. Visualizar esto se vuelve abrumador. Es como cortar el terreno en diferentes direcciones, niveles y ángulos en todas las dimensiones posibles.

Aquí nuestra mente humana se queda atrás, incapaz de visualizar el espacio completo sin recurrir a las matemáticas o a la "fuerza bruta" de probar innumerables combinaciones de hiperparámetros.

Una idea de lo que he expresado aquí se muestra en el siguiente gráfico para poder ayudar a la idea de la búsqueda de un mínimo en un espacio dado (que en este caso es tridimensional).

<figure style="width: 100%; text-align: center;">
    <embed type="text/html" src="/assets/images/simple_post_images/minimos_superficie.html" style="width: 100%; height: 500px; border: none;" alt="Imagen 1: Heatmap del Análisis de MAE.">
    <figcaption>Imagen 1: Ilustración del Desafío de la Búsqueda de Mínimos - Esta visualización en 3D representa un terreno complejo que simboliza el desafío de encontrar el mínimo absoluto en el contexto de los hiperparámetros. Los cortes verticales azules muestran diferentes perspectivas de este terreno multidimensional, revelando múltiples mínimos locales dependiendo del corte elegido. En este laberinto de posibilidades, explorar cada punto sería una tarea costosa en términos de tiempo y recursos. Es aquí donde entra en juego el "gradiente," representado por la línea roja, que guía la búsqueda hacia un mínimo local desde un punto de partida específico. Sin embargo, el uso del gradiente puede llevarnos a mínimos locales en lugar del mínimo absoluto, lo que ilustra la complejidad de encontrar la combinación óptima de hiperparámetros para nuestro modelo.</figcaption>
</figure>

En esta travesía, nos encontramos en la encrucijada de elegir entre métodos que nos ayudarán a navegar este laberinto de manera eficiente. La elección de la herramienta adecuada es fundamental, ya que nos permitirá explorar este laberinto multidimensional con inteligencia y nos acercará cada vez más a encontrar el modelo perdido que buscamos.


## Comparando Grid Search y Hyperopt
Ahora que hemos desvelado los tesoros de nuestros hiperparámetros y comprendido su funcionamiento (capítulo anterior), es hora de aprender cómo encontrar las combinaciones óptimas para ajustar nuestro modelo XGBoost. En esta sección, compararemos dos enfoques populares para optimizar los hiperparámetros: Grid Search y Hyperopt.

### Grid Search: Navegando el Laberinto de Hiperparámetros

Comencemos con Grid Search, un método que se asemeja a tener un mapa detallado pero limitado de nuestro laberinto de hiperparámetros. Este enfoque es bastante simple de entender y usar, pero puede ser lento en espacios de búsqueda extensos.

Grid Search es como explorar el espacio de hiperparámetros siguiendo cortes precisos a través de la superficie que vimos en el gráfico interactivo. Similar a cómo los cortes azules en el gráfico representan diferentes combinaciones de hiperparámetros, Grid Search prueba todas las combinaciones posibles dentro de un espacio de búsqueda predefinido.

```python
from sklearn.model_selection import GridSearchCV
from xgboost import XGBRegressor

# Define el espacio de búsqueda de hiperparámetros
param_grid = {
    'n_estimators': [100, 200, 300],
    'learning_rate': [0.01, 0.1, 0.2],
    'max_depth': [3, 4, 5]
}

# Crea un modelo base
model = XGBRegressor(random_state=42)

# Inicializa Grid Search
grid_search = GridSearchCV(estimator=model, param_grid=param_grid, 
                           scoring='neg_mean_absolute_error', cv=5)

# Ajusta Grid Search a tus datos
grid_search.fit(X_train, y_train)

# Obtiene los mejores hiperparámetros
best_params = grid_search.best_params_
best_mae = -grid_search.best_score_

print(f"Mejores hiperparámetros encontrados: {best_params}")
print(f"Mejor puntuación MAE: {best_mae}")
```

### Hyperopt: Exploración Inteligente del Laberinto

Ahora, cambiemos nuestro enfoque hacia Hyperopt, un método que se asemeja a un explorador inteligente en nuestro laberinto. Hyperopt utiliza algoritmos para buscar de manera más eficiente en el espacio de hiperparámetros. Esto lo convierte en una excelente opción cuando el espacio de búsqueda es extenso y deseas una optimización más rápida.

Hyperopt es como seguir el gradiente en el gráfico interactivo que presentamos. El gradiente representa la dirección óptima para buscar la combinación perfecta de hiperparámetros que minimice el MAE. En lugar de probar todas las combinaciones, Hyperopt ajusta sus pasos para avanzar de manera más efectiva hacia el mínimo.

```python
from hyperopt import hp, fmin, tpe, Trials, STATUS_OK, space_eval
from xgboost import XGBRegressor

# Define el espacio de búsqueda de hiperparámetros
space = {
    'n_estimators': hp.choice('n_estimators', [100, 200, 300]),
    'learning_rate': hp.loguniform('learning_rate', -3, 0),
    'max_depth': hp.quniform('max_depth', 3, 5, 1)
}

# Función objetivo para Hyperopt
def objective(params):
    model = XGBRegressor(random_state=42, n_jobs=1, **params)
    kf = KFold(n_splits=5, shuffle=True, random_state=42)
    mae = -np.mean(cross_val_score(model, X_scaled, y, cv=kf, scoring='neg_mean_absolute_error'))
    return {'loss': mae, 'status': STATUS_OK}

# Inicializa Trials para el registro
trials = Trials()

# Ejecuta Hyperopt para la optimización
best = fmin(fn=objective, space=space, algo=tpe.suggest, max_evals=N_TRIALS, trials=trials)

# Obtiene los mejores hiperparámetros y MAE
best_params = space_eval(space, best)
best_mae = -min(trials.losses())

print(f"Mejores hiperparámetros encontrados: {best_params}")
print(f"Mejor puntuación MAE: {best_mae}")
```

## Una Elección Importante: Definir el Espacio de Búsqueda

Es importante destacar que la elección del espacio de búsqueda de hiperparámetros es crucial para el éxito de estas técnicas ("param_grid" en el caso de Grid Search y "space" en el caso de Hyperopt). Tanto Grid Search como Hyperopt pueden buscar eficientemente dentro de los límites que establezcamos. Por lo tanto, definir adecuadamente estos límites requiere un conocimiento sólido del problema y de las características estadísticas de los hiperparámetros.

Ambos métodos tienen sus ventajas y desventajas, y la elección entre ellos dependerá de la complejidad del espacio de búsqueda y de tus preferencias personales. Grid Search es simple y exhaustivo, pero puede ser lento en espacios de búsqueda grandes. Hyperopt es más eficiente pero requiere más configuración. Es análogo al dilema de recorrer la superficie de búsqueda punto por punto y saber que vamos a encontrar la solución al punto más bajo, o bien decidirse a ir en busca de este punto solo utilizando herramientas locales como la visión del terreno, la gravedad o cualquier otro para decir direccionar nuestra caminata al punto "mas bajo".

La Elección de Hyperopt

Dada la complejidad de nuestro laberinto de hiperparámetros y la necesidad de una solución eficiente, hemos elegido Hyperopt como nuestra herramienta preferida. Su enfoque basado en la optimización bayesiana nos permite navegar este terreno con mayor precisión y rapidez. En los próximos pasos de nuestra aventura, profundizaremos en el uso de Hyperopt y descubriremos cómo esta elección nos acerca cada vez más a encontrar el modelo perdido que buscamos.

<div align="right" markdown="1">
Hasta el próximo cronopunto del Principia 🥚.

DV

</div>
</div>