import React, { useCallback, useMemo, useRef } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

function MapContainer({center}) {
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
          <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default MapContainer