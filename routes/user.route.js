const {Router}= require('express');
const usrCtrl = require('../controllers/user.controller');
const {login,register}=require('../validators/user');
const {upload}=require('../middlewares/multerConfig');
const routes=Router();

routes.post('/register',upload,register,usrCtrl.register);
routes.post('/login',login,usrCtrl.login);

module.exports=routes;