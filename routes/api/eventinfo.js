
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


	let data = {
		"name": req.params.name,
		"checkedin": 1
	};
    const user = new userModel(data);
  
    try {
      user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }


	// const found = members.some(member => member.name === req.params.name);
	// if(found) {
	// 	members.forEach(member => {
	// 		if(member.name === req.params.name) {
	// 			member.checkedin = 1;
	// 			res.json({msg: 'Member was updated',member});
	// 		} 
	// 	});
	// 	res.json(members.filter(member => member.name === req.params.name));
	// } else {
	// 	res.status(400).json({msg: `Member not found : ${req.params.name}`});
	// }

});

module.exports = router;
