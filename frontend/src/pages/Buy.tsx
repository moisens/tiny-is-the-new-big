import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import CardsPage from "../components/cardspage/Cardspage";
import { HeaderBuy } from "../utils/headers-utils";

const Buy = () => {
  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
      <CardsPage />
    </div>
  )
}

export default Buy;