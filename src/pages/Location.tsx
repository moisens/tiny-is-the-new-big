import { LocationDataType } from "../types/interface-Locationsdata";
import LocationPage from "../components/cardspage/LocationPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";
import useFetch from "../hooks/useFetch";

const Location = () => {
  const {
    dataHouse: locations,
    statusType, //must be a statusType --> "pending"|"resolved"|"rejected"
    error,
  } = useFetch<LocationDataType>(
    "https://tinyhousing-backend-ezprh.ondigitalocean.app/v1/locations"
  );

  return (
    <div className="home-container">
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <LocationPage
          locationDatas={locations}
          statusType={statusType}
          error={error}
        />
      </ErrorBoundary>
    </div>
  );
};

export default Location;
