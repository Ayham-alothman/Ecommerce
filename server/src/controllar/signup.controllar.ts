import {Request,Response} from 'express';
import {sign} from 'jsonwebtoken'
import {signupUser} from '../db/signup.db.js'
function signupControllar(req:Request,res:Response){
 if(req.body.name.length>=8&&req.body.email.length>=8&&req.body.password.length>=8){
   signupUser(req.body.name,req.body.email,req.body.password)
   .then((d)=>{
    const Payload={name:d?.name,email:d?.email};
    const token=sign(Payload,'ayham1998',{expiresIn:'2d'});
    res.status(200).cookie('token',token,{maxAge:900000}).end();
   })
   .catch((e)=>{res.status(403).json(e)})
 }
 else{res.status(400).json('there miss data')}
}

export {signupControllar}