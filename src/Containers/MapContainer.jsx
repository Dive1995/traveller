import React, { useCallback, useMemo, useRef } from 'react'
import { GoogleMap, Marker, OverlayView } from '@react-google-maps/api'

function MapContainer({center, places}) {
  const mapRef = useRef();
  const options = useMemo(() => ({
    disableDefaultUI: true
  }),[]);
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  // const getPixelPosition = (lat, lng, map) => {
  //   console.log(map)
  //   if(!map){
  //     return { left: 0, top: 0 }
  //   }
  //   const projection = map.getProjection();
  //   const pixel = projection.fromLatLngToDivPixel(new window.google.maps.LatLng(lat, lng));
  //   return { left: pixel.x, top: pixel.y };
  // };

  // const markerPosition = getPixelPosition(center.lat, center.lng, mapRef?.current);
  const getPixelPositionOffset = (offsetWidth, offsetHeight, labelAnchor) => {
    return {
        x: offsetWidth + labelAnchor.x,
        y: offsetHeight + labelAnchor.y,
    };
};
  
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
    {/* {places?.map(place => <Marker position={place?.cordinates} icon={{ url: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png", scaledSize: new window.google.maps.Size(30, 30) }} />)} */}
          {/* <Marker position={center} icon={{ url: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png" }} /> */}
    {places?.map((place, index) => <OverlayView position={place.cordinates} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
       getPixelPositionOffset={(x, y) => getPixelPositionOffset(x, y, {     x: 0, y: 0 })}
      >
        <div className='w-6 h-6 rounded-full flex items-center justify-center bg-blue-500 text-white'>{index+1}</div>
      </OverlayView>)}
      
      </GoogleMap>
    </div>
  )
}

export default MapContainer