import "../components/home/home.scss";
import Header from "../components/singleproducts/Header";
import InfoHouse from "../components/singleproducts/InfoHouse";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { HousedataType, StatusType } from "../types/interface-housedata";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import { FavoritesProvider } from "../context/favoriteContext";

interface IsFetchingError {
  message: string;
}

const isError = (error: unknown): error is IsFetchingError => {
  if (error && typeof error === "object" && "message" in error) {
    return true;
  }
  return false;
};

const Singleproduct = () => {
  const { _id } = useParams();
  const [datas, setDatas] = useState<HousedataType>({} as HousedataType);
  const [status, setStatus] = useState<StatusType>("iddle");
  const [error, setError] = useState<unknown>(null);

  const fetchHouses = async () => {
    try {
      setStatus("pending");
      const response = await fetch(`/api/v1/products/${_id}`);
      if (!response.ok) {
        throw new Error(`unable to fetch data!`);
      }
      const jsonhouse = await response.json();
      setStatus("resolved");
      setDatas(jsonhouse);
    } catch (error) {
      if (isError(error)) {
        setError(error.message);
        setStatus("rejected");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <div className="home-container">
      <FavoritesProvider>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
          <Header productData={datas} statusType={status} />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
          <InfoHouse productData={datas} statusType={status} />
        </ErrorBoundary>
      </FavoritesProvider>
    </div>
  );
};

export default Singleproduct;
