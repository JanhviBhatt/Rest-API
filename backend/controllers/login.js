const User = require('../model/User')
const bcrypt = require('bcryptjs')
const login = async (req,res,next)=>{
    const{email,password}= req.body;
    let existingUser;
    try{
       existingUser = await User.findOne({email})
    }catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({message : "Couldn't find user with this email!"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message : "Incorrect Password"})
    }
    return res.status(200).json({message:"Login Successful"})
}

module.exports = login;