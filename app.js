// JavaScript Document

var express = require('express');
var app = express();
var randomMusic = require('./lyric.js');


app.use(express.static(__dirname + '/public/index.html'));
app.get('/', function(req,res) {
	var selection = Math.floor(Math.random()*randomMusic.length);
	res.send(randomMusic[selection]);
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Something");
});




