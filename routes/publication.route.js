const {Router}= require('express');
const pbCtrl=require('../controllers/publication.controller');
const routes=Router();

routes.get('/',(req,res)=>{
    res.send('PUBLICACIONES');
});

module.exports=routes;