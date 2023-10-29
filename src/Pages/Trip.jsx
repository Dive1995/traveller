import MapContainer from "../Containers/MapContainer"
import TripContainer from "../Containers/Trip/TripContainer"
import { useLoadScript } from '@react-google-maps/api'


function Trip() {  
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ["places"]
  });
  
  if(!isLoaded) return <div>Loading...</div>
  return (
    <div className="main-page grid grid-cols-2">
        <TripContainer/>
        <MapContainer/>
      </div>
  )
}

export default Trip