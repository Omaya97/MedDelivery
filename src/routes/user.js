const express =require('express');
const router = express.Router();

const user = require('./../models/user');

router.post("/list",async function(req,res){
    var users = await user.find({user_id: req.params.user_id});
    res.json(users);
 }); 

router.post("/add",async function(req,res){
 await user.deleteOne({id:req.body.id});
  const newUser = new user({
      id: req.body.id,
      user_id: req.body.user_id,
      username: req.body.username,
      password: req.body.password,
      lastname: req.body.lastname,
      role: req.body.role,
      phone: req.body.phone,
       address: req.body.address
    });
    await newUser.save();
      
    const response ={message: "New User Created!" + 'id: ${req.body.id}' };
    res.json(response);
 }); 
router.post("/delete",async function(req,res){
  await user.deleteOne({id: req.body.id});
  const response ={message: " User Deleted! " + 'id: ${req.body.id}' };
 res.json(response);
 }); 

module.exports = router;
  