const {body}=require('express-validator');
const {verify}=require('../middlewares/verifyRequest');

const login=[
    body('email','Enter a valid email address').exists().notEmpty().isEmail().normalizeEmail(),
    body('password','Password min 8 characters').exists().notEmpty().isLength({min:8}),
    (req,res,next)=>verify(req,res,next)
];

const register=[
    body('username','Complete a username min 4 characters').exists().notEmpty().isLength({min:4}).trim().escape(),
    body('email','Enter a valid email address').exists().notEmpty().isEmail().normalizeEmail(),
    body('password','Password min 8 characters').exists().notEmpty().isLength({min:8}),
    (req,res,next)=>verify(req,res,next)
]

module.exports={login,register};