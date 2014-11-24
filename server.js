var express = require('express');
var app = express();

// app.get('/', function(req, res){
//   res.send('hello world');
// });


app.use('/',express.static(__dirname + '/public'));

app.get('/api',function(req,res){
	res.send("hello")
})

app.listen(8000);