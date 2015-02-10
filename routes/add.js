//var data = require("../data.json");
var pg = require('pg');





exports.addFriend = function(req, res) { 

  pg.connect(process.env.DATABASE_URL, function(err, client) {
    var query = client.query('Insert Into test_tab(name,car) values($1,$2) RETURNING name',[req.query.name,req.query.car],
	                            function(err,result){
                                if(err){
                                  console.log(err);
															  }
															  else {
                                  console.log('row inserted with id: ' + result.rows[0].name);
                                }
															 client.end();
													   });
														 

    
  });  




	// Your code goes here
	//data["friends"].push({name:req.query.name,description:req.query.description,imageUrl:"http://lorempixel.com/400/400/people"});
	res.render('add');
 }
