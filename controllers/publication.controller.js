const {Publication}=require('../models');
const controller={};

controller.create=async(req,res)=>{
    try {
        const {description,photo,idUser}=req.body;
        const image=req.file;
        let address;
        (image)?address=image.path:address=photo;
        const post=await Publication.create({description:description,photo:address,idUser:idUser});
        return res.json(post);
    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'Bad Request'});
    }
};

controller.delete=async(req, res) => {
    try {
        const post=await Publication.destroy({where:{id:req.params.id}});
        if(post)return res.json({message:'Publication deleted'});
        else return res.status(404).json({message:'Publication not found'});

    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'Some error'});
    }
}

controller.update=async(req, res) => {
    try {
        const {description,photo}=req.body;
        const image=req.file;
        const post=await Publication.findOne({where:{id:req.params.id}});
        if(!post) return res.status(404).json({message:'Publication not found'});
        else{
            var address;
            (image)?address=image.path:address=photo;
            await post.update({description:description,photo:address});
            await post.save();
            return res.json(post);
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'Some error'});
    }
};

controller.getPostsByUserId=async(req, res) => {
    try {
        const posts=await Publication.findAll({where:{idUser:req.params.id}});
        if(posts.length > 0)return res.json(posts);
        else return res.status(404).json({message:'Publications not found'});
    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'Some error'});
    }
};

controller.getPost=async(req, res) => {
    try {
        const post=await Publication.findOne({where:{id:req.params.id}});
        if(post)return res.json(post);
        else return res.status(404).json({message:'Publication not found'});
    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'Some error'});
    }
}

module.exports=controller;