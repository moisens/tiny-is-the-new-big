import useFetch from "../hooks/useFetch";
import CardsPage from "../components/cardspage/Cardspage";

const Location = () => {
  const categories = "buy";
  const { data, status, error } = useFetch(`/api/v1/products`);

  return (
    <div className="home-container">
      {/* <CardsPage data={data} status={status} error={error} /> */}
    </div>
  )
}

export default Location;