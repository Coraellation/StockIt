var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // serve static assets

// testing purposes only
// var greeter = require('test');
// greeter.hello('Alice');
// greeter.bye('Steven');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(socket){
	socket.on('get company', function(co){
    	console.log('Company: ' + co);
  	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});