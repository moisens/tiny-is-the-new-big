import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import { CardProvider } from "../context/CardsContext";
import { useCard } from "../hooks/useCards";




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
