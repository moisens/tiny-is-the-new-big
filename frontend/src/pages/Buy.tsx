import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";





const Buy = () => {

  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
        <Cardspage />
        
      
    </div>
  );
};

export default Buy;
