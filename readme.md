# Data Day 2017

> http://opendataday.org/  

Este repositorio continene software ensamblado durante el evento Data Day 2017. En la carpeta ```./parser``` podes encontrar la herramenta creada para mesclar los metadatos con los geodatos.

El [evento](https://www.meetup.com/es-ES/Cafes-de-DATA/events/237526839/?eventId=237526839) se organiza a través de la red social MeetUp.

Contacta a [Fernando Uval](mailto:fernandouval@gmail.com) y pedile una invitación al Slack de [Data Uruguay](https://datauruguay.slack.com/). El equipo mantendrá la comunicación en el canal **#atunombre_desarrollo**.

### Convirtiendo manualmente los geodatos a otro sistema de cordenadas 

Si no la tienes todavia, descargue e instale en su máquina la aplicación [QGIS](www.qgis.org/en/site/forusers/download.html). En seguida oprima [aquí](https://catalogodatos.gub.uy/dataset/vias-de-transito-montevideo) para descargar los datos georeferenciados de las vías de transito de la ciudad de Montevideo. Descomprima en tu computadora el archivo descargado. Es importante que todos los archivos extraídos estén en la misma carpeta.

Utilizando la aplicación QGIS, importe como una nueva capa vetorial el archivo .shp descargado desde la pagina de la municipalidad. Los datos de la municipalidad pueden estar en la proyección **EPSG:900913** o **EPSG:32721**. Asegurese de que QGIS haya interpretado automaticamente el sistema de coordenadas como **EPSG:32721**. En en panel de capas, clique con el botón derecho del mouse sobre el identificador de la nueva capa y oprima _guardar como_ en el menu de opciones desplegado. Modifique los campos de la caja de diálogo de exportación para que el campo formato diga _GeoJSON_. Seleccione un destino para el nuevo archivo y dale un nombre. En el campo _SRC_ clique en el iconito que se ve a la derecha y selecione el sistema de coordenadas que tendrá el nuevo archivo. En nuestro caso queremos que el nuevo sistema de coordenadas sea **EPSG:4326**.

### Mesclando los geodatos con los metadatos

Oprima [aquí](https://docs.google.com/spreadsheets/d/1DIvR2icfxcFZaQJhh22CBFHVulte8z1KxUjNJiP9FNs/edit#gid=1205598755)
 para acceder a los metadatos de las vías de la ciudad de Montevideo. Utilizando el ratón seleccione la opción _descargar como_ que se encuentra en el menu ```Archivo > Descargar como```. En seguida seleccione la opción que dice CSV. Guardálo preferencialmente junto al archivo de geodatos generado anteriormente.
