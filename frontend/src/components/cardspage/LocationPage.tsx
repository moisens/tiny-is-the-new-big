import "./locations.scss";
import { Locations } from "../../types/interface-Locationsdata"
import Button from "../button/Button";
import LocationsList from "./LocationsList"


const LocationPage = ({ locationDatas, status, error }: Locations) => {
  const { locations } = locationDatas;
  console.log(locations);
  
  if (status === "pending") return <h2>Loading...</h2>
  if (status === "rejected") throw error;
  
  
  
  return (
    <section className="location-container">
      <section className="location-content">
        {status === "resolved" && locations?.map(location => {
          const { _id } = location;
          return <LocationsList location={location} key={_id}/>
        })}
      </section>
      <section className="location-map">Map</section>
    </section>
  )
}

export default LocationPage;