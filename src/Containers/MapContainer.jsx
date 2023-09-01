import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { GoogleMap, Marker, OverlayView } from '@react-google-maps/api'
import { useSelector } from 'react-redux';

function MapContainer({center}) {
  const mapRef = useRef();
  const options = useMemo(() => ({
    disableDefaultUI: true
  }),[]);
  
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  const places = useSelector(state => state.trips.value.filter(trip => {
    const tripWithPlace = trip.itenary.map(itenary => itenary.length > 0 && itenary.type === 'place');
    if(tripWithPlace.length > 0)
      return tripWithPlace.itenary
    return null;
  }));

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
    {/* {places?.map(place => <Marker position={place?.cordinates} icon={{ url: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png", scaledSize: new window.google.maps.Size(30, 30) }} />)} */}
          
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