const {Router}= require('express');
const usrCtrl = require('../controllers/user.controller');
const {login,register}=require('../validators/user');
const {upload}=require('../middlewares/multerConfig');
const routes=Router();

routes.post('/auth/register',upload,register,usrCtrl.register);
routes.post('/auth/login',login,usrCtrl.login);
routes.put('/update/:id',upload,usrCtrl.update);
routes.delete('/delete/:id',usrCtrl.delete);

module.exports=routes;