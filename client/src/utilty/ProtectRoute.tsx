import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectRoute=()=>{
   if(Cookies.get('token')){return(<Outlet/>)}
   return (<Navigate to={'/signin'}/>)
        
}

export default ProtectRoute;