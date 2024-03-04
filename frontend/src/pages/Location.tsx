import { LocationDataType } from "../types/interface-Locationsdata";
import LocationPage from "../components/cardspage/LocationPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import useFetch from "../hooks/useFetch";

const Location = () => {
  const {
    dataHouse: locations,
    status,
    error,
  } = useFetch<LocationDataType>("/api/v1/locations");

  return (
    <div className="home-container">
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <LocationPage
          locationDatas={locations}
          statusType={status}
          error={error}
        />
      </ErrorBoundary>
    </div>
  );
};

export default Location;
