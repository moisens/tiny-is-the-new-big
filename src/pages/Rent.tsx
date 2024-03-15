import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderRent } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import { HousedataType } from "../types/interface-housedata";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import useFetch from "../hooks/useFetch";

const Rent = () => {
  const categories = "rent";
  const {
    dataHouse: datas,
    status,
    error,
  } = useFetch<HousedataType>(
    `https://tinyhousing-backend-ezprh.ondigitalocean.app/api/v1/products?category=${categories}`
  );

  return (
    <div className="home-container">
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Headers dataHeaders={HeaderRent} />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Cardspage productData={datas} status={status} error={error} />
      </ErrorBoundary>
    </div>
  );
};

export default Rent;
