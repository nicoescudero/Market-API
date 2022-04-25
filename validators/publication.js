const {body,param,query,check}=require('express-validator');
const {verify}=require('../middlewares/verifyRequest');
const publication=[];
publication.verify=[
    body('description','Product description, minimum 10 characters').exists().notEmpty().isLength({min:10}),
    body('photo','Enter a valid url for the photo').exists().notEmpty().isURL(),
    (req,res,next)=>verify(req,res,next)
];

module.exports={publication};