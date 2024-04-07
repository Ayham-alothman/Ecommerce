import ScrollItems from "../../../reusable component/ScrollItems";
import SourceNow from "../../../reusable component/SourseNow";


let arrofitems=[
    {id:1,name1:'any',name2:"10"},
    {id:1,name1:'any',name2:"10"},
    {id:1,name1:'any',name2:"10"},
    {id:1,name1:'any',name2:"10"},
    {id:1,name1:'any',name2:"10"},
    {id:1,name1:'any',name2:"10"}, 
]

function HomeAndOutdoor(){
    return(
        <>
        <div className="mt-6">
            <h1 className=" text-base font-semibold mt-5 ml-4">Home and outdoor</h1>
            <ScrollItems items={arrofitems} />
            <SourceNow/>
            
        </div>
        </>
    )
}

export default HomeAndOutdoor;