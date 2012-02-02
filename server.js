
var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile('client.html', function(err, data){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write(data);
    response.end();
  });
});
server.listen(8080);
var nowjs = require("now");
var everyone = nowjs.initialize(server);
//var everyone = require("../lib/nowServerLib.js").initialize(server);


everyone.connected(function(){
  console.log("Joined: " + this.now.name);
});


everyone.disconnected(function(){
  console.log("Left: " + this.now.name);
});

everyone.now.distributeMessage = function(message){
    everyone.now.receiveMessage(this.now.name, message);};
