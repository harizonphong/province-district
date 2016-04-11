var test = require('./data.json');
var entries = require('object.entries');
var fs = require('fs');

var listState = []

var provinces = entries(test);

provinces.forEach( function (province) {
    var name = province[1].name;
    var districts = entries(province[1].districts);
    var listDistricts = []
    districts.forEach( function (item) {
        var dis = item[1];
        listDistricts.push(dis);
    });

    var pro = {
        name: name,
        districts: listDistricts
    }
    listState.push(pro);
});

var outputFilename = './province-district.json';

//     WRITE FILE JSON

/*
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



