var express = require('express');
var debug = require('debug')('ascema');
var http = require('http');
var app = express();
var mongojs = require('mongojs');
var bodyparser = require('body-parser');
var db = mongojs('instrumentation',['rock_type_details','extensometer','convergence','stressmeter','pressure_cell','sisc_cell','mine_activities','geotech_personnel']);
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
app.get('/rock_type_details',function(req,res){
console.log("GET")
db.rock_type_details.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/rock_type_details',function(req,res){
console.log(req.body)
db.rock_type_details.insert(req.body,function(err,docs){
res.json();
});
});
app.get('/extensometer',function(req,res){
console.log("GET")
db.extensometer.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/extensometer',function(req,res){
console.log("post from extensometer")	
console.log(req.body)
db.extensometer.insert(req.body,function(err,docs){
res.json();
});
});
app.get('/convergence',function(req,res){
console.log("GET")
db.convergence.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/convergence',function(req,res){
console.log("post from convergence")	
console.log(req.body)
db.convergence.insert(req.body,function(err,docs){
res.json();
});
});
app.get('/stressmeter',function(req,res){
console.log("GET")
db.stressmeter.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/stressmeter',function(req,res){
console.log("post from convergence")	
console.log(req.body)
db.stressmeter.insert(req.body,function(err,docs){
res.json();
});
});
app.get('/pressure_cell',function(req,res){
console.log("GET")
db.pressure_cell.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/pressure_cell',function(req,res){
console.log("post from convergence")	
console.log(req.body)
db.pressure_cell.insert(req.body,function(err,docs){
res.json();
});
});
app.get('/sisc_cell',function(req,res){
console.log("GET")
db.sisc_cell.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/sisc_cell',function(req,res){
console.log("post from sisc_cell")	
console.log(req.body)
db.sisc_cell.insert(req.body,function(err,docs){
res.json();
});
});
app.get('/mine_activities',function(req,res){
console.log("GET")
db.mine_activities.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/mine_activities',function(req,res){
console.log(req.body)
db.mine_activities.insert(req.body,function(err,docs){
res.json();
});
});
app.get('/geotech_personnel',function(req,res){
console.log("GET")
db.geotech_personnel.find(function(err,docs){
	console.log(docs);
	res.json(docs);
});
});
app.post('/geotech_personnel',function(req,res){
console.log(req.body)
db.geotech_personnel.insert(req.body,function(err,docs){
res.json();
});
});
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
