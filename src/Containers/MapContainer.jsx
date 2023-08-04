import React, { useCallback, useMemo, useRef } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

function MapContainer({center, isMapLoaded}) {
  const mapRef = useRef();
  const options = useMemo(() => ({
    disableDefaultUI: true
  }),[]);
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  


  if(!isMapLoaded) return <div>Loading...</div>
  return (
    <div className="flex h-screen w-full">
      <GoogleMap 
        zoom={12} 
        center={center} 
        mapContainerStyle={{width: '100%',height: '100%'}} 
        onLoad={onLoad}
        options={options}>
      </GoogleMap>
    </div>
  )
}

export default MapContainer