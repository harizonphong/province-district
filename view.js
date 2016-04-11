var test = require('./data.json');
var entries = require('object.entries');
var fs = require('fs');

var listState = []

var provinces = entries(test);

provinces.forEach( function (province) {
    listState.push(province[1]);
});

var outputFilename = './province-district.json';

/*      WRITE FILE JSON
fs.writeFile(outputFilename, JSON.stringify(listState), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
});
*/

// READ FILE JSON

var result = require('./province-district.json');
console.log(result);

