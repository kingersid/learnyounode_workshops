var url = require('url')
var http = new require('http')


var server = http.createServer(function(request,response){
	if (url.parse(request.url).pathname === '/api/parsetime' )
		var date = new Date(url.parse(request.url,true).query.iso)
		var response_object = {"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()}
		response.simpleText(200, JSON.stringify(response_object))
	if (url.parse(request.url).pathname === '/api/unixtime' )
		var date = new Date(url.parse(request.url,true).query.iso)
		var response_object = {"unixtime":date.getTime()}
		response.simpleText(200, JSON.stringify(response_object))
});

server.listen(process.argv[2])


