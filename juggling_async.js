var http = require('http')

var list_url = [process.argv[2],process.argv[3],process.argv[4]]

function print_data (list_url) {
	var status_list =[0,0,0]
	http.get(list_url[0],function(response){
		response.on('data',function(data){
			var data = data.toString()
		})
		response.on('end',function(){
			status_list[0]=true

		})
	})
	http.get(list_url[1],function(response){
		response.on('data',function(data){
			var data = data.toString()
		})
		response.on('end',function(){
			status_list[1]=true

		})
	})
	http.get(list_url[2],function(response){
		response.on('data',function(data){
			var data = data.toString()
		})
		response.on('end',function(){
			status_list[2]=true

		})
	})
	
}






