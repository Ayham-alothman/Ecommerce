import {Request,Response} from 'express';
import {sign} from 'jsonwebtoken'
import {signupUser} from '../db/signup.db.js'
  
async function signupControllar(req:Request,res:Response){
 try{
  await signupUser(req.body.name,req.body.email,req.body.password);
  res.status(200).json(`successfully registered account`);
 }
 catch(e){res.status(403).json(e)}
   
   
}

export {signupControllar}

//const Payload={name:d?.name,email:d?.email};
//const token=sign(Payload,'ayham1998',{expiresIn:'2d'});
//res.status(200).cookie('token',token,{maxAge:900000}).end();