import {Router} from 'express'
import {signupControllar} from '../controllar/signup.controllar';
import { ValditionSignup } from '../middelware/Valdition.Signup';
const routerUrl=Router();

routerUrl.post('/',ValditionSignup,signupControllar);

export default routerUrl;