import { Client} from'pg';
import bcrypt from 'bcrypt'

  
  
async function signupUser(name:string,email:string,password:string){
   
    const client=new Client({host:'localhost',database:'ecommers',user:'ayhamaluthman',password:'AYHAM1998',port:5432});
    
    try{ 
        await client.connect();
        const emailExsist= await client.query(`SELECT email FROM USERS WHERE email=$1`,[email]);
        
         if(emailExsist.rows.length==0){
           const hash=bcrypt.hashSync(password,bcrypt.genSaltSync(10));
           const r=await client
           .query(`INSERT INTO USERS (NAME,EMAIL,PASSWORD)VALUES($1,$2,$3) RETURNING *;`,[name,email,hash]);
             if(r.rowCount){return true}
             throw `there erorr at insert`
             
         }
         throw new Error(`the email exsist before`)
        
    }
    catch(e){throw e}
    finally{await client.end()}

}




export {signupUser}