var xlsx = require('node-xlsx');
var async = require('async');

var __dirname = '/Users/quocphong/work/province-district/'
var obj = xlsx.parse(__dirname + '/province.xlsx');
var fs = require('fs');
var groups = {};

for (var i = 0; i < obj[0].data.length; i++) {
	var group = obj[0].data[i][0];
	if (group in groups) {
		groups[group].push(obj[0].data[i][1]);
	} else {
		groups[group] = [obj[0].data[i][1]];
	}
};
var outputFilename = './district.json';
fs.writeFile(outputFilename, JSON.stringify(groups), function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("JSON saved to " + outputFilename);
	}
});
