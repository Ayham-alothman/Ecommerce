import {Router} from 'express'
import {signinControllar} from '../controllar/signin.controllar.js';
import { ValditionSignin } from '../middelware/Valdition.Signin.js';
const routerUrl=Router();

routerUrl.post('/',ValditionSignin,signinControllar);

export default routerUrl;