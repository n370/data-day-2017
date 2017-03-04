var shapefile = require('shapefile')
var csv = require('csv')

shapefile.open("../../data/v_mdg_vias.shp")
  .then(source => source.read()
    .then(function log(result) {
      if (result.done) return;
      console.log(result.value);
      return source.read().then(log);
    }))
  .catch(error => console.error(error.stack));

