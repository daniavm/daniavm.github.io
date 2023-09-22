---
title: "En Busca del Modelo Perdido (Parte 1 - Explorando)"
layout: single
author_profile: true
related: true
comments: true
toc: false

header:
  image: /assets/images/PAES_prediction_model/24417257_2202_w015_n001_735b_p15_735.jpg
  teaser: /assets/images/PAES_prediction_model/24417257_2202_w015_n001_735b_p15_735.jpg

categories:
  - Reflexiones
tags:
  - Trabajo
  - Reflexiones
  - Pensamientos
  - Indicadores
  - Conducta
  - Análisis de Datos
---
<div align="justify" markdown="1">
Partir en el análisis de datos puede ser un camino complejo para quienes no manejan demasiado la programación. De hecho yo mismo no me considero un experto, pero como he mencionado en publicaciones anteriores, mi objetivo es ser un aprendanzante experimentado, así que quiero aprender enseñando.

En este primer artículo buscaré mostrar las primeras etapas de exploración del análisis de datos, así que compartiré parte del código que estoy usando para descubrir un posible modelo que prediga los resultados de una prueba de acceso universitario con los datos de un colegio. 

## Análisis de Datos Exploratorio (EDA)

Al partir necesitamos explorar. Tal como Indiana Jones en cada una de sus aventuras, el objetivo inicial cuando ya has entendido las necesidades y problemas del lugar donde estas inmers@ es entender el conjunto de datos que tienes a disposición.

El EDA - o Exploratory Data Analysis (EDA) en inglés - es un proceso en el cual te dedicas a entender tu conjunto de datos para luego comenzar su manipulación. Puedes analizar desde el punto de vista de las tablas como de los gráficos, pero nunca olvides que la idea fundamental es familiarizarte con la naturaleza ... de los datos. 

En el caso de esta misión, utilizaremos una base de datos que se encuentra en un archivo CSV - comma separated values o "valores separados por coma" - y lo leeremos con las funciones básicas de Python.

### Entrando en la Jungla de Datos

Lo primero es definir nuestras herramientas de trabajo, y en python esto quiere decir referirse a las liberías. El código a continuación permite leer el archivo CSV que mencionamos anterior mente. No olvides que el archivo CSV tiene que estar en la misma carpeta donde estas corriendo el código o bien escribir correctamente la ruta a la carpeta que contiene el dataset (set de datos).

{% highlight javascript linenos %}
# Usamos el comando read_csv para leer el archivo con los datos desde la ruta anterior
data.info()
{% endhighlight %}

El output después de aplicar este comando es algo así:

<figure style = "float: right; width: 100%; text-align: center; font-style: italic; font-size: 0.6em; text-indent: 0; margin: 0.6em; padding: 0.8em;">
  <img src="/assets/images/PAES_prediction_model/dataset_info.png" width="40%"  alt="Nubes de metano en Titán y posiblemente lluvia.">
  <figcaption>Output del comando .info() cuando se aplica al dataset leído.</figcaption>
</figure>


```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

</div>


---

## Referencias

- Clear, J., 2018. Atomic Habits. Penguin Publishing Group.



