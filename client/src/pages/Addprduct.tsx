import { useState } from "react";
import axios from "axios";

import { Base64 } from "../utilty/Base64";

function Addproduct(){
       const[Img,setImg]=useState('');
       let[nameproduct,setnameproduct]=useState('');
       let[namecategoryproduct,setnamecategoryproduct]=useState('');
       
       function handelImg(e:any){
        
        setImg(e.target.files[0])
        
       }

     async  function handelsubmite(){
         const form=new FormData();
         const base64=await Base64(Img);
         
          if(base64!==false){

             form.append('nameproduct',nameproduct);
             form.append('categoryproduct',namecategoryproduct);
             form.append('imgproduct',base64);
              
             axios.post('http://localhost:5000/product',form,
             {headers:{'Content-Type':'application/json'}})
             .then((d)=>{console.log(d)})
             .catch((e)=>{console.log(e)}) 
               
          }
         
       }
    return(
    <>
       <div>
        <div></div>
        <div></div>
       </div>


        <div>
            <h1>add product</h1>
            <input type="text" placeholder="enter name product"  onChange={(e)=>{setnameproduct(e.target.value) } } value={nameproduct}></input>
            <input type="text" placeholder="enter name category" onChange={(e)=>{setnamecategoryproduct(e.target.value) } } value={namecategoryproduct}></input>
            <input type="file" name="imageproduct" onChange={(e)=>{handelImg(e)}} ></input>
            <button onClick={(e)=>{e.preventDefault();handelsubmite()}}>save product</button>
        </div> 
    </>
    )
}
export default Addproduct;