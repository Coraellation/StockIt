var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var senlp = require('senlp');
var scraper = require('newsscraper');

app.use(express.static(path.join(__dirname, 'public'))); // serve static assets

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

io.on('connection', function(socket){
	socket.on('get company', function(co){
    	scraper(co, function(content){
    		var i = 1;
    			var totalSent = [];

    			function getSentiment() {
    				var str = '';
    				if (typeof content[i] !== 'undefined') {
    					if (content[i].length > 140) {
    						str = content[i].substring(0,140);
    					} else {
    						str = content[i];
    					}
    				} else {
    					i++;
    					getSentiment();
    					return;
    				}
    				
	    			senlp.getSentiment(str, function(err, se){
	    				console.log('i '+ i);
	    				totalSent.push(se);
						i += 1;
	    				if (i < content.length) {
	    					getSentiment();
	    				} else {
							socket.emit('post data', totalSent);
	    				}
	    	
	    			});
	    		}
				getSentiment();
    		
    	});
  	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
