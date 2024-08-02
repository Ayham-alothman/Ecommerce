import {Router} from 'express'
import {signupControllar} from '../controllar/signup.controllar.js';
import { ValditionSignup } from '../middelware/Valdition.Signup.js';
const routerUrl=Router();

routerUrl.post('/',ValditionSignup,signupControllar);

export default routerUrl;