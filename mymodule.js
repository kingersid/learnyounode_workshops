




//exports.hola=function (directory,extension,callback) {
//	var fs = require('fs')
//	var path = require('path')
//	var array_files = []
//	fs.readdir(directory, function (err, list) {
//		if (err) throw err;
//	  	list.forEach(function (file) {
//	    if (path.extname(file) === '.' + extension)
//	     	array_files.push(file) 
//	  	})
//	})
//	return array_files
//};

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}

