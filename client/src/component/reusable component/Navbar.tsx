import { IoBagCheckOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";
import { FaUser } from "react-icons/fa6";
function Navbar(){
    return(
        <>
          <div className="container-mobile flex justify-between items-center h-14 bg-white w-full ">
            <div className="flex">
                <MdMenu className=" text-4xl mr-4" />
                <div className="flex items-center ">
                    <IoBagCheckOutline className=" bg-primaryColor text-gray-200 text-4xl rounded-xl px-2 mr-1" />
                    <h1 className="text-2xl font-semibold text-blue-heavy">Brand</h1>
                </div>
            </div>

            <div className="flex space-x-5 mr-2 ">
                <SlBasketLoaded className="text-2xl" />
                <FaUser className="text-2xl " />
            </div>

          </div>
        </>
    )
}

export default Navbar;


