// Get all of our friend data
//var data = require('../data.json');
var pg = require('pg');

var cars={'cars':[]};

pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM test_tab');

  query.on('end', function(row) {
    console.log(JSON.stringify(row));
		cars['cars'].push(row);
  });
});

exports.view = function(req, res){
	console.log(cars);
	
	res.render('index',cars);
};
