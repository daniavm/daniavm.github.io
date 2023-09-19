---
title: "Tendencias del concepto de Machine Learning en Educación"
layout: single
author_profile: true
related: true
comments: true
toc: false

head_scripts:
  - https://www.gstatic.com/charts/loader.js

header:
  image: /assets/images/teaser_wallpaper.jpg
  teaser: /assets/images/teaser_wallpaper.jpg

categories:
  - Estudios
  - Educación
  - Machine Learning
tags:
  - Machine Learning
  - Educación
  - Tendencias
  - Análisis de Datos
---
<div align="justify" markdown="1">
La página en blanco quizas es uno de los problemas más recurrentes y más complejos de resolver para nosotr@s l@s human@s. Creo que no tengo recuerdo la cantidad de veces que me he quedado sin ideas, o bien sin la posibilidad de responder a algún problema que me ha entregado la vida respecto de alguna situación en específico. Nuestra mente tiende a buscar resultados rápidos sin percatarse de la verdadera naturaleza de los mecanismos que producen los cambios en las cosas.
</div>

<script type="text/javascript">
    // Carga la biblioteca de visualización de Google Charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define los datos
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Week');
      data.addColumn('number', 'Machine learning in education');
      data.addColumn('number', 'Machine learning in marketing');
      data.addColumn('number', 'Machine learning in schools');
      data.addRows([
        ['2022-09-25', 50, 57, 16],
        ['2022-10-02', 87, 61, 15],
        ['2022-10-09', 57, 61, 16],
        ['2022-10-16', 62, 58, 0],
        ['2022-10-23', 61, 30, 0],
        ['2022-10-30', 49, 43, 24],
        ['2022-11-06', 46, 38, 0],
        ['2022-11-13', 44, 54, 30],
        ['2022-11-20', 52, 52, 0],
        ['2022-11-27', 44, 47, 12],
        ['2022-12-04', 52, 87, 9],
        ['2022-12-11', 46, 58, 32],
        ['2022-12-18', 15, 53, 0],
        ['2022-12-25', 62, 32, 9],
        ['2023-01-01', 39, 62, 0],
        ['2023-01-08', 37, 30, 23],
        ['2023-01-15', 47, 47, 0],
        ['2023-01-22', 41, 73, 24],
        ['2023-01-29', 50, 76, 11],
        ['2023-02-05', 48, 58, 20],
        ['2023-02-12', 58, 48, 13],
        ['2023-02-19', 49, 71, 0],
        ['2023-02-26', 59, 46, 0],
        ['2023-03-05', 60, 44, 0],
        ['2023-03-12', 44, 63, 0],
        ['2023-03-19', 12, 61, 50],
        ['2023-03-26', 48, 81, 34],
        ['2023-04-02', 38, 54, 27],
        ['2023-04-09', 86, 66, 13],
        ['2023-04-16', 59, 52, 18],
        ['2023-04-23', 25, 76, 14],
        ['2023-04-30', 63, 54, 28],
        ['2023-05-07', 87, 75, 23],
        ['2023-05-14', 39, 71, 14],
        ['2023-05-21', 39, 56, 35],
        ['2023-05-28', 51, 46, 13],
        ['2023-06-04', 46, 51, 17],
        ['2023-06-11', 43, 44, 43],
        ['2023-06-18', 25, 47, 13],
        ['2023-06-25', 48, 37, 22],
        ['2023-07-02', 44, 34, 16],
        ['2023-07-09', 41, 68, 11],
        ['2023-07-16', 62, 32, 9],
        ['2023-07-23', 44, 36, 23],
        ['2023-07-30', 55, 100, 0],
        ['2023-08-06', 42, 54, 0],
        ['2023-08-13', 71, 57, 0],
        ['2023-08-20', 45, 37, 10],
        ['2023-08-27', 33, 71, 0],
        ['2023-09-03', 37, 47, 23],
        ['2023-09-10', 81, 70, 15]
      ]);

      // Configura las opciones del gráfico
      var options = {
        title: 'Tendencias de Machine Learning en Educación y Marketing',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      // Crea el gráfico
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      // Dibuja el gráfico con los datos y opciones especificados
      chart.draw(data, options);
    }
  </script>


  <div id="chart_div" style="width: 100%; height: 400px;"></div>


---

## Referencias

- Clear, J., 2018. Atomic Habits. Penguin Publishing Group.



