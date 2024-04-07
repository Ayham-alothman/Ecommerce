import logo from '../../../../assets/images/product1.jpeg';
const arrofitems=[
    {id:1,name:'name' ,pdiscount:'-25%'},
    {id:2,name:'name2',pdiscount:'-25%'},
    {id:3,name:'name2',pdiscount:'-25%'}, 
    {id:4,name:'name2',pdiscount:'-25%'},
    {id:5,name:'name2',pdiscount:'-25%'},
    {id:6,name:'name2',pdiscount:'-25%'},
    {id:7,name:'name2',pdiscount:'-25%'},];
    let DateandTime={h:2,m:22,s:11}

  
    
function DealsAndOffers(){
    return(
    <>
     <div className=" h-60 w-full  mt-2 ">
        <div className=" container-mobile h-16 bg-white flex items-center justify-between ">
            <div className=" ">
                <p className=" text-lg font-semibold">Deals and offers</p>
                <p className=" text-sm font-normal">Electronic equipments</p>
            </div>
            <div className="flex space-x-1">
                <p className=" h-11 w-11 bg-gray-200 text-gray-500 text-base font-semibold flex items-center justify-center">{DateandTime.h}</p>
                <p className=" h-11 w-11 bg-gray-200 text-gray-500 text-base font-semibold flex items-center justify-center">{DateandTime.m}</p>
                <p className=" h-11 w-11 bg-gray-200 text-gray-500 text-base font-semibold flex items-center justify-center">{DateandTime.s}</p>
            </div>

        </div>
        <div className="flex overflow-x-scroll">
            {arrofitems.map((e,i)=>{
                return<div key={i} 
                className=" min-w-32 h-48 border-r-2 border-t-2 border-gray-200" >
                       <img src={logo} className=' w-24 h-24 mx-auto' ></img>
                       <p className='mt-2 flex justify-center text-sm font-normal'>{e.name}</p>
                       <p className='flex justify-center mt-2 w-16 h-7 bg-red-heavy mx-auto text-red rounded-full'>{e.pdiscount}</p>
                
                      </div>})}

        </div>
     </div>
    </>)
}

export default DealsAndOffers;