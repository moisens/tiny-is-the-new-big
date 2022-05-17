import useFetch from "../hooks/useFetch";
import CardsPage from "../components/cardspage/Cardspage";

const Location = () => {
  const categories = "location";
  const { data, status, error } = useFetch(`http://localhost:5000/api/v1/products?category=${categories}`);
  return (
    <div className="home-container">
      <CardsPage data={data} status={status} error={error} />
    </div>
  )
}

export default Location;