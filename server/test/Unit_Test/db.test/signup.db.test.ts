import { signupUser } from '../../../src/db/signup.db';
import { Client } from 'pg';


describe('test signup in database',()=>{
  
  let user={
    name:'ayham300',
    email:'ayham303@gmail.com',
    password:'1234567812'
  }

  afterAll(async()=>{
    const client=new Client({host:'localhost',database:'ecommers',user:'ayhamaluthman',password:'AYHAM1998',port:5432});
   try{
    await client.connect();
    await client.query(`Delete FROM USERS WHERE email=$1`,[user.email]);
    await client.end()
   }
   catch(e){console.log(e)}
  })

 
  it('insert corect username and password and name must inserting and give me true ',async()=>{
      const val=await signupUser(user.name,user.email,user.password);
      expect(val).toBe(true);
  })


  it('insert email exsisit must give me throw erorr ',async()=>{
   await expect(signupUser(user.name,user.email,user.password))
   .rejects
   .toThrow('the email exsist before')
})

})