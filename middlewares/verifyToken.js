const jwt=require('jsonwebtoken');

module.exports=async(req,res,next)=>{
    try {
    const token=req.headers.authorization.split(' ')[1];
    if(!token)return res.status(403).json({message:'No token provided'});
    const user=jwt.verify(token,process.env.KEY);
    if(user){
        req.user=Object.values(user)[0].id;
        next();
    }
    else return res.status(403).send('Invalid Token');   
    } catch (error) {
        return res.status(403).json({message:'You need a token!'});   
    }
}