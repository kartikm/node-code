var fs = require('fs')
var name = process.argv[2]
var ext = new RegExp('\\.' + process.argv[3] + '\n$')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (ext.test(file))
      console.log(file)
    })
})
