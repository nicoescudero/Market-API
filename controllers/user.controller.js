const {User,Publication} = require('../models');
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

controller.delete=async(req,res)=>{
    try {
        let {id}=req.params;
        const user=await User.destroy({where:{id:id}});
        if(user){
            await Publication.destroy({where:{idUser:id}});
            return res.json({message:'User deleted'});
        }else return res.status(404).json({message:'User not found'});
        
    } catch (error) {
        console.error(error);
        return res.status(400).send('Some error');
    }
}

controller.update=async(req,res) => {
    try {
        const {username,email,password,newPassowrd,photo}=req.body;
        const image=req.file;
        let {id}=req.params;
        const user=await User.findOne({where:{id:id}});
        if(!user)return res.status(404).json({message:'User not found'});
        else{
            var address;
            (image)?address=image.path:address=photo;
            if(username && username.length < 4)return res.status(400).json({message:'Username too short'});
            if(password && newPassowrd){
                if(newPassowrd.length <8)return res.status(400).json('The password must be at least 8 characters long');
                let match=await bcrypt.compare(password,user.password);
                if(!match)return res.status(400).json({message:'Old password is invalid'});
                const hash=await encrypt(newPassowrd);
                await user.update({username:username,email:email,password:hash,photo:address});
                await user.save();
                return res.json(user);
            }else{
                await user.update({username:username,email:email,photo:address});
                await user.save();
                return res.json(user);
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send('Bad request');
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