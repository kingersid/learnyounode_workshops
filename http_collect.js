var bl = require('bl')
var http = require('http')


var http = require('http')


http.get(process.argv[2],function(response){
	response.pipe(bl(function(err,data){
		if (err)
			throw err
		var data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
})
