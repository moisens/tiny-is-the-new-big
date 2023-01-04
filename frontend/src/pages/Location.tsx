import { useState, useEffect } from "react";
import { LocationDataType } from "../types/interface-Locationsdata";
import { StatusType } from "../types/interface-housedata";
import LocationPage from "../components/cardspage/LocationPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../components/errorBounderies/Errorboundaries";



const Location = () => {

 

  return (
    <div className="home-container">
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <LocationPage />
      </ErrorBoundary>
    </div>
  );
};

export default Location;
