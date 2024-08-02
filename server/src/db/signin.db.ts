import { Client} from'pg';
import bcrypt from 'bcrypt';

async function valditionUser(email:string,password:string){
  const client=new Client({host:'localhost',database:'ecommers',user:'ayhamaluthman',password:'AYHAM1998',port:5432});
   try{
     await client.connect();
     const r=await client.query(`SELECT email,password,name FROM USERS WHERE email=$1`,[email])
     if(r.rows.length){
        if(bcrypt.compareSync(password,r.rows[0].password)){;
          return {name:r.rows[0].name,email:r.rows[0].email}
        }
        throw new Error(`incorrect password`);
     }
     throw new Error(`do't found email`);
     }
   catch(e){throw e}
   finally{await client.end()}
}



export {valditionUser}