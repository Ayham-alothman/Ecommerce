import {Router} from 'express'
import {signinControllar} from '../controllar/signin.controllar';
import { ValditionSignin } from '../middelware/Valdition.Signin';
const routerUrl=Router();

routerUrl.post('/',ValditionSignin,signinControllar);

export default routerUrl;