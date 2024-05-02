import {Router} from 'express'
import {signupControllar} from '../controllar/signup.controllar.js'
const routerUrl=Router();

routerUrl.post('/',signupControllar);

export default routerUrl;