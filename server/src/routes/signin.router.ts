import {Router} from 'express'
import {signinControllar} from '../controllar/signin.controllar.js'
const routerUrl=Router();

routerUrl.post('/',signinControllar);

export default routerUrl;