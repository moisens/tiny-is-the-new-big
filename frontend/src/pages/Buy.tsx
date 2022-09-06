import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";


const Buy = () => {
  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
    </div>
  );
};

export default Buy;
