import imgProdct from '../../assets/images/product2.jpeg'
interface item{
    id:number,
    name1:string,
    name2:string
    
}
function ScrollItems(props:{items:item[]}){ 
 return(
    <>
     <div className='flex overflow-x-scroll'>
        {
            props.items.map((e,i)=>{
                return <div key={i} 
                className=" min-w-32 h-48 border-r-2 border-t-2 border-b-2 border-gray-200">
                           <img src={imgProdct}
                           className=' w-24 h-24 mx-auto'></img>
                           <p className=' text-sm font-normal flex justify-center mt-2  '>{e.name1}</p>
                           <p className=' text-sm font-normal flex justify-center mt-2 text-gray-500  '>from USD{e.name2}</p>
                    
                       </div>
            })
        }

     </div>
    </>
 )
}
export default ScrollItems;