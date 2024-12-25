---
title: "En Busca del Modelo Perdido - Parte 9: Explorando el Terreno de Hiperparámetros con Grid Search e Hyperopt"
layout: single
author_profile: false
related: true
comments: true
toc: false
# date: 2024-01-30T11:48:41-04:00

sidebar:
  nav: "modelo_perdido"

classes: wide

header:
  image: /assets/images/PAES_prediction_model/busca_del_modelo_perdido_parte_9.png
  teaser: /assets/images/PAES_prediction_model/busca_del_modelo_perdido_parte_9.png

categories:
  - Machine Learning

tags:
  - XGBoost
  - Hiperparámetros
  - Optimización
  - Grid Search
  - Hyperopt
  - Aprendizaje Automático
  - Análisis de Datos

---

<div align="justify" markdown="1">
En nuestra inquebrantable búsqueda del mejor modelo para predecir los resultados de la prueba PAES, nos enfrentamos a uno de los desafíos más complejos y enigmáticos: la optimización de hiperparámetros en XGBoost. En este capítulo abordaremos los mecanismos que tenemos a disposición para buscar combinaciones de hiperparámetros que nos ayuden a encontrar el mejor modelo de predicción después de adentrarnos en este laberinto multidimensional, donde las herramientas gráficas son insuficientes pero nuestra imaginación y desarrollo de las matemáticas hacen la diferencia para lograr el objetivo.

## Hiperparámetros: El Laberinto Multidimensional

Imagina que estás explorando un paisaje montañoso, donde cada punto simboliza una combinación de hiperparámetros que afectan el rendimiento de tu modelo. Comienzas en un entorno bidimensional, donde identificar el mínimo parece sencillo. Pero al agregar más hiperparámetros, entras en un espacio tridimensional y, eventualmente, en dimensiones aún mayores, incrementando significativamente la complejidad de tu búsqueda.

La visualización en 3D que generamos (ver imagen a continuación) ilustra este primer salto a la complejidad. En ella, puedes ver cómo el terreno cambia con cada conjunto de hiperparámetros. Los cortes verticales azules representan distintas perspectivas de este terreno, revelando la presencia de múltiples mínimos locales. La línea roja, nuestro gradiente, te guía a través de este paisaje en busca de un mínimo local, partiendo de un punto específico.

<figure style="width: 100%; text-align: center;">
    <embed type="text/html" src="/assets/images/simple_post_images/minimos_superficie.html" style="width: 100%; height: 500px; border: none;" alt="Imagen 1: Heatmap del Análisis de MAE.">
    <figcaption>Imagen 1: Ilustración del Desafío de la Búsqueda de Mínimos - Esta visualización en 3D representa un terreno complejo que simboliza el desafío de encontrar el mínimo absoluto en el contexto de los hiperparámetros. Los cortes verticales azules muestran diferentes perspectivas de este terreno multidimensional, revelando múltiples mínimos locales dependiendo del corte elegido. En este laberinto de posibilidades, explorar cada punto sería una tarea costosa en términos de tiempo y recursos. Es aquí donde entra en juego el "gradiente," representado por la línea roja, que guía la búsqueda hacia un mínimo local desde un punto de partida específico. Sin embargo, el uso del gradiente puede llevarnos a mínimos locales en lugar del mínimo absoluto, lo que ilustra la complejidad de encontrar la combinación óptima de hiperparámetros para nuestro modelo.</figcaption>
</figure>

Sin embargo, esta imagen es solo una metáfora simplificada. En la realidad, trabajamos con espacios de muchas más dimensiones, donde la visualización gráfica se vuelve imposible. **En estos espacios de alta dimensión, las herramientas gráficas pierden su utilidad y dependemos enteramente de métodos matemáticos y estadísticos avanzados**.

Encontrar el mínimo absoluto en un espacio multidimensional - como el espacio que describe el MAE (Mean Absolute Error)- es un desafío complejo. Más allá de los tres ejes que podemos visualizar, debemos aplicar algoritmos y técnicas de optimización para navegar en un terreno donde la intuición visual ya no puede ayudarnos. El proceso va más allá de seguir un gradiente visible; se convierte en una búsqueda analítica y matemática en un laberinto de posibilidades.

En esta travesía, nos encontramos en la encrucijada de elegir entre métodos que nos ayudarán a navegar este laberinto de manera eficiente. La elección de la herramienta adecuada es fundamental, ya que nos permitirá explorar este laberinto multidimensional con eficiencia y nos acercará cada vez más a encontrar el modelo perdido que buscamos.

## Comparando Grid Search e Hyperopt
Ahora que hemos desvelado los tesoros de nuestros hiperparámetros y comprendido su funcionamiento ([capítulo 8](https://daniavm.github.io/_posts/en_busca_del_modelo_perdido/2024-01-19-en-busca-del-modelo-perdido-parte-8/){:target="_blank"}), es hora de aprender cómo encontrar las combinaciones óptimas para ajustar nuestro modelo XGBoost. En esta sección, compararemos dos enfoques populares para optimizar los hiperparámetros: **Grid Search e Hyperopt**.

### Grid Search: Recorriendo todo el laberinto de hiperparámetros

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

### Hyperopt: Exploración "Inteligente" del Laberinto

Ahora, cambiemos nuestro enfoque hacia Hyperopt, un método que se asemeja a un explorador inteligente en nuestro laberinto. Hyperopt utiliza algoritmos basados en mecanismos bayesianos para buscar de manera más eficiente en el espacio de hiperparámetros. Esto lo convierte en una excelente opción cuando el espacio de búsqueda es extenso y deseas una optimización más rápida.

Hyperopt es como seguir el gradiente en el gráfico interactivo que presentamos. El gradiente representa la dirección óptima para buscar la combinación perfecta de hiperparámetros que minimice el MAE. Sin embargo, en lugar de probar todas las combinaciones posibles, Hyperopt ajusta sus pasos utilizando información recopilada de las iteraciones anteriores. Funciona como un explorador que aprende de sus experiencias previas y adapta su estrategia para avanzar de manera más efectiva hacia el mínimo.

En esencia, Hyperopt utiliza modelos bayesianos para estimar la función objetivo y su incertidumbre en función de las observaciones previas. Luego, elige la siguiente combinación de hiperparámetros que maximice la información ganada. Este enfoque permite que Hyperopt explore el espacio de búsqueda de manera más inteligente y se acerque rápidamente a las soluciones óptimas.

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

Es importante resaltar que la elección del espacio de búsqueda de hiperparámetros desempeña un papel fundamental en el éxito de estas técnicas ("param_grid" para el código de Grid Search y "space" para Hyperopt). Ambos métodos tienen la capacidad de buscar eficientemente dentro de los límites que establezcamos. Por lo tanto, **definir adecuadamente estos límites requiere un sólido entendimiento del problema y un conocimiento profundo de las características estadísticas de los hiperparámetros**.

La elección entre Grid Search e Hyperopt dependerá en gran medida de la complejidad del espacio de búsqueda y de tus preferencias personales. **Grid Search es una opción simple y exhaustiva, pero su velocidad puede disminuir en espacios de búsqueda extensos**. En contraste, **Hyperopt es más eficiente pero demanda una configuración inicial más detallada para no caer en sub o sobre ajustes**. Esta elección es análoga al dilema de recorrer minuciosamente la superficie de búsqueda punto por punto (teniendo la certeza de vamos a encontrar la solución pero a un costo de recursos alto), o bien, decidirse a explorar de manera más "inteligente", utilizando herramientas locales (como la visión del terreno, la gravedad, u otros) pero con la incertidumbre de saber si al punto que llegamos es verdaderamente "el punto más bajo".

### Elección de Hyperopt: Descubriendo el Potencial de los Datos

En nuestra búsqueda para construir el mejor modelo que prediga los resultados de la prueba PAES, hemos hecho un hallazgo revelador. Más allá de los ensayos de los estudiantes, contamos con una amplia gama de información adicional, como anotaciones conductuales, asistencia, registros de psicopedagogía y más. Los cuales podemos agregar a este modelo.

Este descubrimiento nos lleva a la elección de Hyperopt como nuestra herramienta de optimización de hiperparámetros. Hyperopt es capaz de manejar eficientemente espacios de hiperparámetros extensos y aprender en tiempo real, lo que es fundamental en un entorno de datos tan rico como el escolar.

Nuestra elección de Hyperopt se basa en su capacidad para abordar la complejidad de nuestros datos y su eficiencia en el uso de recursos. Esto nos permite incorporar más datos y mejorar nuestro modelo para que XGBoost, nuestro 'músico obsesivo por la perfección', pueda aprovechar al máximo la información disponible y perfeccionar su técnica.

En el próximo capítulo, definiremos los límites del espacio de búsqueda en Hyperopt, un paso crucial en nuestro camino hacia el modelo perdido.

<div align="right" markdown="1">
Hasta el próximo cronopunto del Principia 🥚.

DV

</div>
</div>