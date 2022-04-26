const {Router}= require('express');
const pbCtrl=require('../controllers/publication.controller');
const {publication}=require('../validators/publication');
const routes=Router();

routes.post('/new',publication.verify,pbCtrl.create);
routes.delete('/delete/:id',pbCtrl.delete);
routes.put('/update/:id',publication.verify,pbCtrl.update);
routes.get('/getAll',pbCtrl.getPostsByUserId);
routes.get('/get/:id',pbCtrl.getPost);

module.exports=routes;