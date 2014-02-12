var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
    var lcount = contents.toString().split(/\r?\n/).length -1
    console.log(lcount)
})
