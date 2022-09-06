import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import CardsPage from "../components/cardspage/Cardspage";
import { HeaderBuy } from "../utils/headers-utils";
import useFetch from "../hooks/useFetch";


const Buy = () => {
  const categories = "buy";
  const { datas, status, error } = useFetch(
    `/api/v1/products?category=${categories}`
  );

  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
      <CardsPage data={datas} status={status} error={error} />
    </div>
  );
};

export default Buy;
