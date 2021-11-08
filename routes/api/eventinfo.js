
const express 	= require('express');
const router  	= express.Router();
const uuid 		= require('uuid');
//JSON from a file
const members = require('../../eventinfodata');
const userModel = require("../../config/models");

//Get all information about the event
//http://localhost:5001/api/eventinfo/geteventinfo
router.get('/geteventinfo', async (req,res) => {

	  const users = await userModel.find({});

	  try {
	    res.send(users);
	  } catch (error) {
	    res.status(500).send(error);
	  }
	


	//Send the json file
	//res.json(members);

});

// Router : Tag the member as checked in
// http://localhost:5001/api/eventinfo/checkedin/<<name>>
router.get('/checkedin/:name',(req,res) => {


	// let data = {
	// 	"name": req.params.name,
	// 	"checkedin": 1
	// };
    // const user = new userModel(data);
	
	const filter = { name: req.params.name };
	const update = { checkedin: 1 };
	let mem = userModel.find({name: req.params.name});
	
    try {
		userModel.findOneAndUpdate(filter, update, function(err, docs){
			if (err){
				console.log(err)
			}
			else{
				console.log("Updated User : ", docs);
			}
		})
		userModel.findOneAndUpdate(filter, update, function(err, docs){
			if (err){
				console.log(err)
			}
			else{
				console.log("Updated User : ", docs);
			}
		})
		//mem.checkedin = 1;
		//mem.save();
      res.send({" Name " : "UPDATED"});
    } catch (error) {
      res.status(500).send(error);
    }



});

router.get('/delete',(req,res) => {

	// res.status(200);
	// res.send({"finished" : "finished"});
	userModel.collection.drop();
	const pbros = ["Tiffany", "Russ", "Will", "Akshin", "Alberto", "Novel", "Karan", "Breanna", "James", "Trevor", "Quinn", "Mick", "Julian", "Anwar"];
	
	for (index = 0; index < pbros.length; index++) {
		let data = {
			"name": pbros[index],
			"checkedin": 0
		};
		const user = new userModel(data);
		try {
			user.save();
		} catch (error) {
			res.status(500).send(error);
		}
	}
	res.send({"Status" : "Completed"});

  
});

module.exports = router;
