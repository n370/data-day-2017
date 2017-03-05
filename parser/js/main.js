var async = require('async')
var fs = require('fs')
var csv = require('csv')
var merge = require('./lib/merge')

var paths = ['../../data/metadatos.csv', '../../data/geodatos.geojson']

async.waterfall([
    readDataFiles,
    parseCSV
], (err, dataset) => { merge(dataset) })

function readDataFiles(callback) {
  async.map(paths, fs.readFile, (err, results) => {
    callback(null, results)
  })
}

function parseCSV(results, callback) {
  csv.parse(results[0], (err, data) => {
    callback(null, JSON.stringify({
      geodatos: results[1],
      metadatos: data
    }))
  })
}
