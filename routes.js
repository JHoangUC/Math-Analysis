var express = require("express");
var router = express.Router();
var clientSessions = require('client-sessions');
var formidable = require('formidable');
var fs = require('fs');

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/homepage.html");
});

router.get("/login",function(request,response){
	response.sendFile(__dirname + "/public/views/login.html");
});
router.get("/signup",function(request,response){
	response.sendFile(__dirname + "/public/views/signup.html");
});


////////////////////////////////////////////////////
const myDatabase = require('./myDatabase');

let db = new myDatabase();

var lev1 =[7,12,17,22,27];
var lev2 =[12,36,108,324,972];
var lev3 =[-3,9,-27,81,-243];

//add or modify.  Use addObject and no need for index.
//                ident should be part of object.
router.get("/userInfo",function(req,res){
	if(!db.infoList[0]){
		req.session_state.reset();
		res.json({anything: "/login"})
	} else{
		console.log("Hey man iasd falsdfkja;ldfkja;sdflkja;dlfkj");
		res.json({username:req.session_state.username, loginState:req.session_state.login});
	}


});
var i = 0;
var level1 = true
var level2 = false
var level3 = false
var level4 = false
router.post('/value', function(req, res){
if(req.body.gameOver == "true"){
	console.log("gameover");
	i=0;
	level1 = true;
}

if(level1){
	if(i < lev1.length)
	{
		console.log(req.body.value + "-value");
		console.log(i);
		if(req.body.value == lev1[i])
		{
			console.log("matched" + req.body.value + " s "+ lev1[i]);
			i++;
			if(req.body.value == "27"){
				level1 = false;
				level2 = true;
				i = 0;
				console.log("returning");
			}
			return res.json(req.body.value);

		}
	}
}
///////////////////////
else if(level2){
	if(i < lev2.length)
	{
		console.log(req.body.value + "=" + lev2[i]);

		if(req.body.value == lev2[i])
		{
			console.log("matched" + req.body.value + " s "+ lev2[i]);
			i++;
			if(req.body.value == "972"){
				level2 = false;
				level3 = true;
				i = 0;
				console.log("returning");
			}
			return res.json(req.body.value);

		}
	}
}
else if(level3){
	if(i < lev3.length)
	{
		console.log(req.body.value + "=" + lev3[i]);

		if(req.body.value == lev3[i])
		{
			console.log("matched" + req.body.value + " s "+ lev3[i]);
			i++;
			if(req.body.value == "-243"){
				level3 = false;
				level4 = true;
				i = 0;
				console.log("returning");
			}
			return res.json(req.body.value);

		}
	}
}
});

router.get("/logout",function(req,res){
	req.session_state.reset();
	res.redirect('/');
});
router.post('/checklogin', function(req, res){
	for(i=0;i<db.infoList.length;i++){
		if(db.infoList[i].username == req.body.username && db.infoList[i].password == req.body.password){
			console.log("Log in approved");
			req.session_state.login = true;
			req.session_state.username = req.body.username;
			req.session_state.password = req.body.password;
			return res.json({redirect:"/"});
		}
	}
	return res.json(null);
	///let obj = {name:req.body.name, password:req.body.password};
	///res.json(db.addObject(obj));
});
router.post('/signup', function(req, res){
	if (req.body.username == "") {
		res.json(null);
	}
	let obj = {username:req.body.username, password:req.body.password};
	req.session_state.login = true;
	req.session_state.username = req.body.username;
	req.session_state.password = req.body.password;
	res.json(db.addObject(obj));
});


module.exports = router;
