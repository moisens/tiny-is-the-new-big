import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import { CardProvider } from "../context/CardsContext";
import useFetch from "../hooks/useFetch";
import { DataProps, LocationProps } from "../types/interface-Dataproducts";




const Buy = () => {
  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
        <CardProvider>
          <Cardspage />
        </CardProvider>
        
      
    </div>
  );
};

export default Buy;
