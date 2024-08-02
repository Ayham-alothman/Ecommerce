


import { IoMdNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";





function Dashadmin(){
    let [showArrow,setshowArrow]=useState(false);
    return(
    <>
    <div className="h-dvh  flex">
        <div className=" bg-gray-200 w-1/5  border-r-4 border-white">
            <h1 className=" text-2xl font-bold flex justify-center text-primaryColor mt-3">logo</h1>
            <div className="h-full  ">
                <div className="flex justify-center mt-5" >All products</div>
                <div onClick={()=>{setshowArrow(!showArrow)}} className="flex mt-10 cursor-pointer justify-center ">
                    <div className="mr-7">Categories</div>
                    {
                        showArrow? <FaArrowDown className="mt-1"/>:<FaArrowUp className="mt-1" />
                    } 
                </div>
                <div className="mt-5">
                    <div className="flex justify-center mt-2">
                        <p className="mr-4">category</p>
                        <div className="w-8 h-8 bg-black text-white text-center">1</div>
                    </div> 
                </div>

            </div>
        </div>
        <div className=" bg-white w-full">
            <div className=" bg-gray-200 w-full h-14">
                <div className="flex flex-row-reverse pt-2 text-2xl text-black ">
                <FaSearch className="mx-5" />
                <IoMdNotifications/>
                

                </div>
            </div>
            <div>All products</div>
           
           
            <div>
                view allproducts

            </div>
        </div>
    </div>

    </>)
}
export default Dashadmin;