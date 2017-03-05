var async = require('async')
var fs = require('fs')
var csv = require('csv')
var merge = require('./lib/merge')

var paths = ['../../data/metadatos.csv', '../../data/geodatos.geojson']

async.waterfall([
    readDataFiles,
    parseCSV
], (err, metadatos, geodatos) => merge(geodatos, metadatos))

function readDataFiles(callback) {
  async.map(paths, fs.readFile, (err, results) => {
    if (err) process.stdout.write(err)
    results.map(result => result.toString('utf8'))
    callback(null, results[0], results[1])
  })
}

function parseCSV(metadatos, geodatos, callback) {
  csv.parse(metadatos, (err, metadatos) => {
    if (err) process.stdout.write(err)
    callback(null, JSON.stringify(metadatos), geodatos)
  })
}
