import SourceNow from "../../../reusable component/SourseNow";
import ScrollItems from "../../../reusable component/ScrollItems";
let arrofitems=[
    {id:1,name1:"any1",name2:"any2"},
    {id:2,name1:"any1",name2:"any2"},
    {id:3,name1:"any1",name2:"any2"},
    {id:4,name1:"any1",name2:"any2"},
]
function Consumeritem(){
    return (
        <>
          <div className="mt-6">
            <h1 className=" text-base font-semibold my-3 ml-4">Consumer electronics</h1>
            <ScrollItems items={arrofitems} />
            <SourceNow/>
            
        </div>
        </>
    )
}

export default Consumeritem;