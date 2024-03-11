import { CardDataLocationType } from "../../types/interface-Locationsdata";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
const LocationListFrame = ({
  location,
  index,
  value,
}: CardDataLocationType) => {
  const {
    googolLink: { lat, lng },
  } = location;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    //libraries: ["places"],
  });

  const center = {
    lat,
    lng,
  };

  if (!isLoaded) return <h1>LOADING...🔋</h1>;

  return (
    <section
      className={
        index === value ? "iframe__container activemap" : "iframe__container"
      }
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </section>
  );
};

export default LocationListFrame;
