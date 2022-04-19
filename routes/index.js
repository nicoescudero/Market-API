const {Router}= require('express');
const routes=Router();

routes.use('/publication',require('./publication.route'));
routes.use('/auth/user',require('./user.route'));

module.exports=routes;