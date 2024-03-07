import "./locations.scss";
import { Locations } from "../../types/interface-Locationsdata";
import LocationsList from "./LocationsList";
import LocationListFrame from "./LocationListFrame";
import { useState } from "react";

const LocationPage = ({ locationDatas, statusType, error }: Locations) => {
  const [value, setValue] = useState(0);
  const { locations } = locationDatas;

  if (statusType === "pending") return <h2>Loading...</h2>;
  if (statusType === "rejected") throw error;

  return (
    <section className="loc__container">
      <section className="loc__content">
        {statusType === "resolved" &&
          locations?.map((location, index) => {
            const { _id } = location;
            return (
              <LocationsList
                location={location}
                index={index}
                value={value}
                setValue={setValue}
                key={_id}
              />
            );
          })}
      </section>
      <section className="loc__map">
        <div className="mapouter">
          <div className="gmap_canvas">
            {statusType === "resolved" ? (
              locations?.map((location, index) => {
                const { country } = location;
                return (
                  //TODO: Modify the googleLink in db, with lat and lng for each img/map
                  <LocationListFrame
                    location={location}
                    index={index}
                    value={value}
                    key={country}
                  />
                );
              })
            ) : (
              <h2>Loanding...</h2>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default LocationPage;
