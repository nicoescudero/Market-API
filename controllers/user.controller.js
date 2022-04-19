const {User} = require('../models');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const controller={};

controller.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({where:{email:email}});
        if(user){
            let match=await bcrypt.compare(password,user.password);
            if(match)
                return res.json({token:await getToken(user.id,user.username)});
            else 
                return res.status(400).json({message:'Email or password is invalid'});
        }
        return res.status(404).json({message:'User not found'});
    } catch (error) {
        console.error(error);
        return res.status(400).send('Some error');
    }
}

controller.register=async(req,res)=>{
    try {
        const {username,email,password,photo}=req.body;
        const image=req.file;
        const user=await User.findOne({where:{email:email}});
        if(user)return res.json({message:'There already exist user'});
        else{
            let newUser;
            (image)?
            newUser=await User.create({username:username,email:email,password:await encrypt(password),photo:image.path}):
            newUser=await User.create({username:username,email:email,password:await encrypt(password),photo:photo});
            return res.status(201).json({token:await getToken(newUser.id,newUser.username)});
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send('Some error');   
    }
}

async function getToken(id,username){
    let user={id,username}
    return await jwt.sign({user},process.env.KEY,{expiresIn:'1h'});
}

async function encrypt(password){
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    return hash;
}

module.exports=controller;