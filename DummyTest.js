var fs = require('fs');
var file = fs.readFileSync("test.xml","utf8");

//Split file by its objects
var filemain = file.split(/(?=<)/);
console.log(filemain);