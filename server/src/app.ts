import express,{Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app:Application=express();

app.use(bodyParser.json({limit:2000000}));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials : true
   }
app.use(cors(corsOptions));


app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    //res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
});



import Signup from './routes/signup.router';
import Signin from './routes/signin.router';
import Product from './routes/product.router'

app.use('/signup',Signup);
app.use('/signin',Signin);
app.use('/product',Product);

export default app;

const Port=5000;
app.listen(Port,()=>{console.log(`listening on port number ${Port}`)})
