import MapContainer from "../Containers/MapContainer"
import NavBar from "../Containers/NavBar"
import TripContainer from "../Containers/TripContainer"

function Trip() {
  return (<>
  
    <div className="main-page grid grid-cols-2">
        <MapContainer/>
        <TripContainer/>
      </div>
  </>
  )
}

export default Trip