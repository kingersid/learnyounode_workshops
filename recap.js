var fs = require('fs')
var path = require('path')

module.exports = function(directory,extension,callback) {
	fs.readdir(directory,function(err,list){
		if (err)
			callback(err)
		list = list.filter(function(file){
			path.extname(file)==='.'+extension
		});
		callback(null,list);
	})
}