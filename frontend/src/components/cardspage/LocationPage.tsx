import "./locations.scss";
import { Locations } from "../../types/interface-Locationsdata";
import LocationsList from "./LocationsList";

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
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="iframe__container"
              width="700"
              height="650"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Mount%20Girouard,%20AB,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default LocationPage;
