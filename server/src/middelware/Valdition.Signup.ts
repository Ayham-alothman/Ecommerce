import { Request,Response,NextFunction} from "express";

function ValditionSignup(req:Request,res:Response,next:NextFunction){
    if((req.body.name&&req.body.email&&req.body.password)
    &&(req.body.name.length>=4&&req.body.email.length>=8&&req.body.password.length>=8)){
      const {email}=req.body;
      const pattren=/.+@gmail.com/;
      if(pattren.test(email)){next()}
      else{
        res.status(403);
        res.json(`the email not valid`)};
    }
    else{
      res.status(400);
      res.json(`there miss data`);}
}

export {ValditionSignup}