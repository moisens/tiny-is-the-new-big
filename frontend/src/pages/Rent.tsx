import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderRent } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import { HousedataType } from "../types/interface-housedata";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import { FavoritesProvider } from "../context/favoriteContext";
import useFetch from "../hooks/useFetch";

const Rent = () => {
  const categories = "rent";
  const {
    dataHouse: datas,
    status,
    error,
  } = useFetch<HousedataType>(`/api/v1/products?category=${categories}`);

  return (
    <div className="home-container">
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Headers dataHeaders={HeaderRent} />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <FavoritesProvider>
          <Cardspage productData={datas} status={status} error={error} />
        </FavoritesProvider>
      </ErrorBoundary>
    </div>
  );
};

export default Rent;
