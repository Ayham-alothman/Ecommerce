import imgpro from '../../../../assets/images/product3.jpeg'
let arrofitem=[
    {id:1,price:'22$',des:'T-shirts with multiple colors, for men'},
    {id:2,price:'24$',des:'T-shirts with multiple colors, for men'},
    {id:3,price:'11$',des:'T-shirts with multiple colors, for men'},
    {id:4,price:'2222$',des:'T-shirts with multiple colors, for men'},
    {id:5,price:'4$',des:'T-shirts with multiple colors, for men'},
]
function RecommanditionItem(){
    return(
        <>
         <div className=" bg-gray-200 container-mobile ">
            <h1 className=' text-lg font-semibold my-2'>Recommended items</h1>
            <div className="grid grid-cols-2 gap-2 ">
                {
                   arrofitem.map((e,i)=>{
                    return <div key={i}
                    className=" min-w-40 h-60 bg-white "
                    >
                        <img
                        src={imgpro}
                        className=" h-36 w-36 rounded-md "></img>
                        <p className=' text-base font-medium ml-2'>{e.price}</p>
                        <p className=' text-sm font-normal text-gray-500 px-2'>{e.des}</p>
                    </div>
                   }) 
                }

            </div>

         </div>
        </>
    )
}

export default RecommanditionItem;