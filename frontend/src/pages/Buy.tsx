import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import useFetch from "../hooks/useFetch";
import { DataProps, LocationProps } from "../types/interface-Dataproducts";




const Buy = () => {
  const categories: string = "buy";
  const { dataHouse, status } = useFetch<DataProps[]>(`/api/v1/products?category=${categories}`, []);

  console.log(dataHouse.products);
  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
     
        <Cardspage />
      
    </div>
  );
};

export default Buy;
