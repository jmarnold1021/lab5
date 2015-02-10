// Get all of our friend data
//var data = require('../data.json');
var pg = require('pg');

var cars={'cars':[]};

exports.view = function(req, res){


  pg.connect(process.env.DATABASE_URL, function(err, client) {
    var query = client.query('SELECT * FROM test_tab');

    query.on('row', function(row,result) {
      console.log(JSON.stringify(row));
		  cars['cars'].push(row);
    });
	  query.on('end',function(result){
	    console.log(cars);
		  client.end();

	  });					 
  });



	
	res.render('index',cars);
};
