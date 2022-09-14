import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderRent } from "../utils/headers-utils";
import useFetch from "../hooks/useFetch";

const Rent = () => {
  const categories = "rent";
  const { data, status, error } = useFetch(
    `/api/v1/products?category=${categories}`
  );

  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderRent} />
      <CardsPage data={data} status={status} error={error} />
    </div>
  );
};

export default Rent;
