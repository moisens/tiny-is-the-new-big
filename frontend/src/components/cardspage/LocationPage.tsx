import "./locations.scss";
import { Locations } from "../../types/interface-Locationsdata"
import Button from "../button/Button";
import LocationList from "./LocationList"


const LocationPage = ({ locationDatas, statusType }: Locations) => {
  
  
  return (
    <section className="location-container">
      <section className="location-content">jj</section>
      <section className="location-map">Map</section>
    </section>
  )
}

export default LocationPage;