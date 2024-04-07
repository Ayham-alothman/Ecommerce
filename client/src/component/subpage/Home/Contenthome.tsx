import Inputsearch from "./chunkcomponent/Inputsearch";
import Categrory from "./chunkcomponent/Category";
import Lasttrading from "./chunkcomponent/Lasttrading";
import DealsAndOffers from "./chunkcomponent/DealsAndOffers";
import HomeAndOutdoor from "./chunkcomponent/HomeAndOutdoor";
import Consumeritem from "./chunkcomponent/Consumeritem";
import Suppliers from "./chunkcomponent/Suppliers";
import RecommanditionItem from "./chunkcomponent/RecommanditionItem";
function Contenthome(){
    return(
    <>
     <Inputsearch/>
     <Categrory/>
     <Lasttrading/>
     <DealsAndOffers/>
     <HomeAndOutdoor/>
     <Consumeritem/>
     <Suppliers/>
     <RecommanditionItem/>

    </>)
}

export default Contenthome;