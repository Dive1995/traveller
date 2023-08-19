import React, { useCallback, useMemo, useRef } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

function MapContainer({center, places}) {
  const mapRef = useRef();
  const options = useMemo(() => ({
    disableDefaultUI: true
  }),[]);
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  
  
  return (
    <div className="flex h-screen w-full">
      <GoogleMap 
        zoom={12} 
        center={center} 
        mapContainerStyle={{width: '100%',height: '100%'}} 
        onLoad={onLoad}
        options={options}>
          {/* <Marker
      icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
      position={{
        lat: 37.772,
        lng: -122.214
      }}
    /> */}
    {places?.map(place => <Marker position={place?.cordinates} icon={{ url: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png", scaledSize: new window.google.maps.Size(30, 30) }} />)}
          {/* <Marker position={center} icon={{ url: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" }} /> */}
      </GoogleMap>
    </div>
  )
}

export default MapContainer