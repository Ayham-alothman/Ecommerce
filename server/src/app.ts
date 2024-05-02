import express,{Application} from 'express';
import bodyParser from 'body-parser';



const app:Application=express();
app.use(bodyParser.json());

import Signup from './routes/signup.router.js';
import Signin from './routes/signin.router.js'

app.use('/signup',Signup);
app.use('/signin',Signin);

const Port=4000;
app.listen(Port,()=>{console.log(`listening on port number ${Port}`)})