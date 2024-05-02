import { Link } from "react-router-dom";
function Signin(){
    return(
        <>
         <div className=" px-16 py-28">
              <h1 className=" text-primaryColor font-bold text-2xl mb-4">Logo Here</h1>
              <p className=" text-sm text-gray-500 font-light mb-3">Welcome back !!!</p>
              <h1 className=" text-3xl font-extrabold mb-4">Signin</h1>
              <p className=" font-light mb-1">Email</p>   
              <input type="text" name="Email" className="border-2 border-gray-500 rounded-md mb-3"></input> <br></br>
              <p className=" font-light mb-1" >Password</p>        
              <input type="text" name="password" className="border-2 border-gray-500 rounded-md mb-1"></input>  <br></br>
              <button className=" mt-3 w-20 h-10 bg-primaryColor text-white ml-4 rounded-lg">Signin</button>  
              <p className="mt-3 font-light text-gray-500">I don’t have an account ? <span className="  font-medium text-primaryColor"><Link to="/signup">Signup</Link></span></p>    
         </div>
        </>
    )
}

export default Signin;