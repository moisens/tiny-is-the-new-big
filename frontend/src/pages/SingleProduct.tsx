import "../components/home/home.scss";
import Header from "../components/singleproducts/Header";
import InfoHouse from "../components/singleproducts/InfoHouse";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Singleproduct = () => {
  const { _id } = useParams();
  const { data, error, status } = useFetch(`/api/v1/products?_id=${_id}`)
  
  return (
    <div className="home-container">
      <Header data={data} error= {error} status={status} />
      <InfoHouse />
    </div>
  )
}

export default Singleproduct;