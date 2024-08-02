import { Request,Response,NextFunction } from "express";

async function ValditionSignin(req:Request,res:Response,next:NextFunction) {
    if(req.body.email&&req.body.password&&req.body.email.length>=8&&req.body.password.length>=8){next()}
    else{
        res.status(403);
        res.json(`there miss data`);
    }
}

export {ValditionSignin}