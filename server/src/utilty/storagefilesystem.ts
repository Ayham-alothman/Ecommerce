import fs from 'fs';

 function storageFile(filename:string,content:string){
     try{
        fs.appendFileSync(`./public/images/${filename}`,content);
        return  true;
         
     }
     catch(e){throw false}
}


 



export {storageFile}