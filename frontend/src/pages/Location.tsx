import { useState, useEffect } from "react";
import { LocationDataType } from "../types/interface-Locationsdata";
import { StatusType } from "../types/interface-housedata";
import LocationPage from "../components/cardspage/LocationPage";


interface IsFetchingError {
  message: string;
}

const isError = (error: unknown): error is IsFetchingError => {
  if (error && typeof error === "object" && "message" in error) {
    return true;
  }
  return false;
};

const Location = () => {
  const [datas, setDatas] = useState<LocationDataType>({} as LocationDataType);
  const [status, setStatus] = useState<StatusType>("iddle");
  const [error, setError] = useState<unknown>(null);

  const fetchHouses = async () => {
    try {
      setStatus("pending");
      const response = await fetch(`/api/v1/locations`);
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
      <LocationPage locationDatas={datas} statusType={status} />
    </div>
  );
};

export default Location;
