const {Router}= require('express');
const token=require('../middlewares/verifyToken');

const routes=Router();

routes.use('/publication',token,require('./publication.route'));
routes.use('/user',require('./user.route'));

module.exports=routes;