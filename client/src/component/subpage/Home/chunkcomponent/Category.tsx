let allCategory=['clothes','elctries','any1','any2','any3','any4']
function Categrory(){
    return(
        <>
         <div className=" container-mobile flex mt-2 overflow-x-auto">
            {allCategory.map((ele,ind)=>{
                return <div
                className="h-9 min-w-28 bg-gray-200 rounded-lg mr-1 "
                 key={ind}><p
                 className="flex justify-center items-center mt-1 text-base font-normal text-primaryColor"
                 >{ele}</p></div>
            })}

         </div>
        </>
    )
}
export default Categrory;