import Navbar from "../component/reusable component/Navbar";
import Contenthome from "../component/subpage/Home/Contenthome";
import { ToastContainer } from 'react-toastify';
function Home(){
 return(
        <>
         <Navbar/>
         <Contenthome/>
         <ToastContainer/>
        
        </>
 )

}
export default Home;