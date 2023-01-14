import { CardDataLocationType } from "../../types/interface-Locationsdata";

const LocationListFrame = ({
  location,
  index,
  value,
}: CardDataLocationType) => {
  const { googolLink } = location;
  return (
    <iframe
      className={
        index === value ? "iframe__container activemap" : "iframe__container"
      }
      width="700"
      height="650"
      id="gmap_canvas"
      src={googolLink}
    />
  );
};

export default LocationListFrame;
