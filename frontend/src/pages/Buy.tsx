import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import PageComponent from "../components/pageComponent/PageComponent";
import { HeaderBuy } from "../utils/headers-utils";

const Buy = () => {
  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
      <PageComponent />
    </div>
  )
}

export default Buy;