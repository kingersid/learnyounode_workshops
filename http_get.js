var http = require('http')


http.get(process.argv[2],function(response){
	response.on('data',function(data){
		var data = data.toString()
		console.log(data)
	})
})


