const {validationResult}=require('express-validator');

const verify=(req,res,next)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }    
        next();
    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'Some error'});
    }
};

module.exports={verify};