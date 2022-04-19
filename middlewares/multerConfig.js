const multer=require('multer');
const path=require('path');
const {nanoid}=require('nanoid');

const storage=multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename:(req,file,next)=>{
        next(null,nanoid()+path.extname(file.originalname));
    }
});

const upload=multer({
    storage,
    dest: path.join(__dirname, '../public/uploads'),
    limits:{fileSize:20000000},
    fileFilter:(req,file,next)=>{
        const types=/png|jpeg|jpg/;
        const mimetype=types.test(file.mimetype);
        const extname=types.test(path.extname(file.originalname));
        if(mimetype && extname)return next(null,true);
        next("Error: the file must be an image");
    }
}).single('image');

module.exports={upload};