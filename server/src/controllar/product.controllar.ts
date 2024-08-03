import { Request,Response,NextFunction } from "express";
import {addProductDB} from '../db/product.db';
import { storageFile } from "../utilty/storagefilesystem";

  function addProductContrillar(req:Request,res:Response,next:NextFunction){
  
  if(req.body.nameproduct&&req.body.categoryproduct){
    addProductDB(req.body.nameproduct,req.body.categoryproduct)
    .then((d)=>{
      const Storage:boolean=storageFile(String(d),req.body.imgproduct);
      if(Storage){res.status(200).end()}
      
    })
    .catch((e)=>{
        if(e){res.status(403).json(e)}
        else(res.status(403).end())
    })
  }
  else{
    res.status(400).json(`there miss data`)
  }
}
export {addProductContrillar}