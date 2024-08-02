import {Router,Request,Response} from 'express';

const routerUrl=Router();
import {addProductContrillar}from '../controllar/product.controllar';




routerUrl.post('/', addProductContrillar);

export default routerUrl;