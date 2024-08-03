import {Request,Response} from 'express';
import {sign} from 'jsonwebtoken'
import {valditionUser} from '../db/signin.db'
async function signinControllar(req:Request,res:Response){
   
        try{
          const d=await valditionUser(req.body.email,req.body.password)
          const Payload={name:d?.name,email:d?.email};
          const token=sign(Payload,'ayham1998',{expiresIn:'2d'});
          res.status(200)
          .cookie('token',token,{maxAge:900000}).end();
        
        }
        catch(e){
          res.status(403);
          res.json(e);}
   
   
}

export  {signinControllar}