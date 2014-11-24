var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var videoSchema = new Schema({
	title:String,
	money:Number,
	image:String,
	video:String,
	pageUrl:String,
	desc:String
})
var Video = mongoose.model('Video', videoSchema);


var matchesSchema = new Schema({
	src: Schema.Types.ObjectId,
	matches: [
		{type: Schema.Types.ObjectId, ref: 'Video'}
	]
})
var Match = mongoose.model('Match', matchesSchema);

// app.get('/', function(req, res){
//   res.send('hello world');
// });

mongoose.connect('mongodb://localhost/cs598')


app.use('/',express.static(__dirname + '/public'));

app.get('/all',function(req,res){
	Video.find(function(err,data){
		res.send(data)
	})
})

app.get('/matches/:srcId',function(req,res){
	Match
		.find({"src":req.params.srcId})
		.populate('matches')
		.exec(function(err,pop_data){
			if(pop_data.length > 0)
				res.send(pop_data[0].matches);
			else
				res.send([]);
		})
	
})



app.listen(8080);