var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/submit', function(req, res){
	
});

var server = app.listen(3307, function() {
	console.log('Express server listening on port ' + server.address().port);
});
