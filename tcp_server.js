

var moment = require('moment')
var net = require('net')

var server = net.createServer(function (socket) {
	socket.end(moment().format("YYYY-MM-DD HH:mm")+'\n')

       // socket handling logic 
})  
server.listen(process.argv[2])
