const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');



module.exports.registerview = (req,res)=>{
    res.render('register')
}
module.exports.registerUser = async(req,res)=>{
   const{username,password} = req.body;
   const  user = await userModel.create({
    username,
    password: await bcrypt.hash(password,10)
   })
   const token = jwt.sign({
    id:user._id, 
    username:user.username
   },"Backend-secret")
   res.cookie('jwt',token)
   res.send(user);
}