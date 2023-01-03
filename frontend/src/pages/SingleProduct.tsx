import "../components/home/home.scss";
import Header from "../components/singleproducts/Header";
import InfoHouse from "../components/singleproducts/InfoHouse";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { HousedataType } from "../types/interface-housedata";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import { FavoritesProvider } from "../context/favoriteContext";

const Singleproduct = () => {
  const { _id } = useParams();
  const {
    dataHouse: datas,
    status,
    error,
  } = useFetch<HousedataType>(`/api/v1/products/${_id}`);

  return (
    <div className="home-container">
      <FavoritesProvider>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
          <Header productData={datas} status={status} error={error} />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
          <InfoHouse productData={datas} status={status} error={error} />
        </ErrorBoundary>
      </FavoritesProvider>
    </div>
  );
};

export default Singleproduct;
