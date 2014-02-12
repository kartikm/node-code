var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lines = str.split(/\r?\n/);

var count = lines.length - 1

console.log(count);
