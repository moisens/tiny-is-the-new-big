import "./locations.scss";
import { Locations } from "../../types/interface-Locationsdata";
import LocationsList from "./LocationsList";
import Map from "../map/Map";

const LocationPage = ({ locationDatas, status, error }: Locations) => {
  const { locations } = locationDatas;

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error;

  return (
    <section className="loc__container">
      <section className="loc__content">
        {status === "resolved" &&
          locations?.map((location) => {
            const { _id } = location;
            return <LocationsList location={location} key={_id} />;
          })}
      </section>
      <section className="loc__map">
        <Map />
      </section>
    </section>
  );
};

export default LocationPage;
