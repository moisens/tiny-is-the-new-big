import "./locations.scss";
import { Locations } from "../../types/interface-Locationsdata";
import LocationsList from "./LocationsList";
import { useState } from "react";

const LocationPage = ({ locationDatas, status, error }: Locations) => {
  const [value, setValue] = useState(0);
  const { locations } = locationDatas;

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") throw error;

  return (
    <section className="loc__container">
      <section className="loc__content">
        {status === "resolved" &&
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
            {locations?.map((location, index) => {
              const { googolLink, country } = location;
              return (
                <iframe
                  className={
                    index === value
                      ? "iframe__container activemap"
                      : "iframe__container"
                  }
                  width="700"
                  height="650"
                  id="gmap_canvas"
                  src={googolLink}
                  key={country}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default LocationPage;
