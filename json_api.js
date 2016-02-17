var url = require('url')
var http = new require('http')


var server = http.createServer(function(request,response){
	if (url.parse(request.url).pathname === '/api/parsetime' )
		dated = new Date(url.parse(request.url,true).query.iso)
		response_object = {"hour":dated.getHours(),"minute":dated.getMinutes(),"second":dated.getSeconds()}
		response.write(JSON.stringify(response_object))
	if (url.parse(request.url).pathname === '/api/unixtime' )
		dated = new Date(url.parse(request.url,true).query.iso)
		response_object = {"unixtime":dated.getTime()}
		response.write(JSON.stringify(response_object))
});

server.listen(process.argv[2])


