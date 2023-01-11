import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";



import React from 'react'

type Props = {}

const Map = (props: Props) => {
  const { isLoaded } = useLoadScript({
    //googleMapsApiKey: process.env.VITE_API_KEY!,
  })
  if (!isLoaded) return <p>Loading...</p>
  return <Mapgoogle />
}

const Mapgoogle = () => {
  return <GoogleMap zoom={10} center={{lat: 44, lng: -80}}  mapContainerClassName="map-container"></GoogleMap>
}


export default Map;




