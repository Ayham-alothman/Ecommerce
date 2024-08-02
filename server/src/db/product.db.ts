import {Client} from 'pg';

async  function addProductDB(name:string,category:string){
  const client=new Client({host:'localhost',database:'ecommers',user:'ayhamaluthman',password:'AYHAM1998',port:5432});
  try{
    await client.connect();
    const data=await client.query(`INSERT INTO PRODUCTS (NAMEPRODUCT,CATEGORY)
    VALUES($1,$2)  RETURNING *;`,[name,category]) ;
    if(data.rowCount==1){return data.rows[0].idproduct };
    throw 'there conflict at insert product'
  }
  catch(e){throw e}
  finally{await client.end()}
}

async function getAllproduct() {
 const client=new Client({host:'localhost',database:'ecommers',user:'ayhamaluthman',password:'AYHAM1998',port:5432});
 try{
    await client.connect();
    const data=await client.query(`select * from products`);
    if(data.rows){return data.rows}
    throw 'there conflict at quiers'
  }
  catch(e){throw e}
  finally{await client.end()}     

}
getAllproduct()

export {addProductDB}