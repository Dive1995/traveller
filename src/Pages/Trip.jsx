import { useState, useEffect, useRef } from "react"
import MapContainer from "../Containers/MapContainer"
import NavBar from "../Containers/NavBar"
import TripContainer from "../Containers/TripContainer"
import { useLoadScript } from '@react-google-maps/api'

function Trip() {
  const [cordinates, setCordinates] = useState({lat:43, lng: -80});
  // const [autoComplete, setAutoComplete] = useState(null);
  const autoCompleteRef = useRef();

  const onLoad = (ref) => (autoCompleteRef.current = ref);
  const onPlaceChanged = () => {
    console.log(autoCompleteRef.current.getPlace())
    const place = autoCompleteRef.current.getPlace();

    if(place){
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      setCordinates({lat, lng});
    }

  }

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ["places"]
  });
  

  return (<>
    <div className="main-page grid grid-cols-2">
        <MapContainer center={cordinates} isMapLoaded={isLoaded}/>
        <TripContainer onLoad={onLoad} onPlaceChanged={onPlaceChanged} isMapLoaded={isLoaded}/>
      </div>
  </>
  )
}

export default Trip