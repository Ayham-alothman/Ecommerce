import Multer from 'multer';

const Storage=Multer.diskStorage({
  destination:function(req,file,cd){cd(null,'./public/images')},
  filename:function(req,file,cd){console.log('set to multer filename')
   let nameImage:string=req.body.nameimage;
      
      cd(null,nameImage);
  }
})


const upload=Multer({storage:Storage})

export default upload; 
