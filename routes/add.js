var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	data["friends"].push({name:req.query.name,description:req.query.description,imageUrl:"http://lorempixel.com/400/400/people"});
	res.render('add',data);
 }
