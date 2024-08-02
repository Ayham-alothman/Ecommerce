import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import Api from '../api/ConfigAxiosApi'
  

function Signup(){
    const Navigate=useNavigate();

   let [Name,setName]=useState('');
   let [Email,setEmail]=useState('');
   let [Password,setPassword]=useState('');
    async function RegsitrationAccount(){
       if(Email.length>=0&&Password.length>=8&&Name){
          const Body={name:Name,email:Email,password:Password};
           try{
              const Req=await Api.post('/signup',Body);
              if(Req.status==200){
                
                toast.success('Regsitration Account', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    
                    });
                    setTimeout(() => {
                        Navigate('/signin')
                    }, 3000);
              }
           }
           catch(e:any){
            console.log(e.response.data)
            toast.error(`${e.response.data}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

                setEmail('');
                setName('');
                setPassword('');

           }  
  
  
       }

      
    }
    return(
        <>
        <div className=" px-16 py-28">
              <h1 className=" text-primaryColor font-bold text-2xl mb-4">Logo Here</h1>
              <p className=" text-sm text-gray-500 font-light mb-3">Welcome back !!!</p>
              <h1 className=" text-3xl font-extrabold mb-4">Signup</h1>
              <p className=" font-light mb-1">name</p>   
              <input type="text" name="Name" className="border-2 border-gray-500 rounded-md mb-3" onChange={(e)=>{setName(e.target.value) }} value={Name} ></input> <br></br>
              <p className=" font-light mb-1">Email</p>   
              <input type="text" name="Email" className="border-2 border-gray-500 rounded-md mb-3" onChange={(e)=>{setEmail(e.target.value) }} value={Email}></input> <br></br>
              <p className=" font-light mb-1" >Password</p>        
              <input type="text" name="password" className="border-2 border-gray-500 rounded-md mb-1" onChange={(e)=>{setPassword(e.target.value) }} value={Password}></input>  <br></br>
              <button className=" mt-3 w-20 h-10 bg-primaryColor text-white ml-4 rounded-lg" onClick={()=>{RegsitrationAccount()}}>Signin</button>  
              <p className="mt-3 font-light text-gray-500">if you have an account ? <span className="  font-medium text-primaryColor"><Link to="/signin">Signin</Link></span></p>    
         </div>
         <ToastContainer  />
        
        </>
    )
}

export default Signup;