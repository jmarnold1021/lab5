var data = require("../data.json");
var cars={'cars':[]};
pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM test_tab');

  query.on('row', function(row) {
    console.log(JSON.stringify(row));
		cars['cars'].push(row);
  });
});


exports.addFriend = function(req, res) {    
	// Your code goes here
	data["friends"].push({name:req.query.name,description:req.query.description,imageUrl:"http://lorempixel.com/400/400/people"});
	res.render('add',data,cars);
 }
