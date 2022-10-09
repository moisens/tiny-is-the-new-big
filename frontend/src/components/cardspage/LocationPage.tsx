import "./cardspage.scss";
import { Locations } from "../../types/interface-Locationsdata"
import Button from "../button/Button";
import LocationList from "./LocationList"


const LocationPage = ({ locationDatas, statusType }: Locations) => {
  
  
  return (
    <section className="page__container">
      {/*Filter component*/}
      <div className="page__filter">Filter goes here!</div>
      <div className="page__content">
        <div className="page__gridcontainer">
          {/*First Card*/}
          <LocationList locationDatas={locationDatas} statusType={statusType} />
          {/*End First Card*/}
        </div>
      </div>
      <div className="lodmore__container">
        <Button
          className="lodmore__btn"
          as="button"
          handleClick={() => {
            console.log("clicked");
          }}
        >
          load more
        </Button>
      </div>
    </section>
  )
}

export default LocationPage;