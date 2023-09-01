import { useState, useEffect, useRef } from "react"
import MapContainer from "../Containers/MapContainer"
import NavBar from "../Containers/NavBar"
import TripContainer from "../Containers/Trip/TripContainer"
import { useLoadScript } from '@react-google-maps/api'
import { useSelector } from "react-redux"

function Trip() {
  const [cordinates, setCordinates] = useState({lat:43, lng: -80});
  // const [autoComplete, setAutoComplete] = useState(null);
  const autoCompleteRef = useRef();
  const mapRef = useRef(null);
  // const [places, setPlaces] = useState([]); //TODO: places will have date, so that we can have multiple day trips
  const trips = useSelector(state => state.trips.value);

  const onLoad = (ref) => {
    autoCompleteRef.current = ref;
    mapRef.current = ref;
    console.log("onLoad should be called first")
  };

  const onPlaceChanged = (day) => {
    console.log("day ", day);
    console.log(autoCompleteRef.current.getPlace());
    const place = autoCompleteRef.current.getPlace();
    
    if(place){
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();
      setCordinates({lat, lng});

      // const map = mapRef.current;
      // map.panTo({lat, lng});
      
      let photoUrl;
      if (place.photos && place.photos.length > 0) {
        photoUrl = place.photos[0].getUrl();
      }

      //TODO: should add place to the end of correspoding day's itinerary
      const updatedTrip = trips.map(trip => {
        if(trip.day === day){
          return {...trip, itenary: [...trip.itenary, {
            type: "place",
            id: place.place_id, 
            name: place.name, 
            address: place.formatted_address, 
            website: place.website, 
            photoUrl: photoUrl,
            rating: place.rating,
            user_ratings_total: place.user_ratings_total,
            phoneNumber: place.international_phone_number,
            website: place.website,
            cordinates: {lat, lng}
          }]}
        }else{
          return trip
        }
      })

      // setTrip(updatedTrip);
    }
  }

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ["places"]
  });
  
  if(!isLoaded) return <div>Loading...</div>
  return (
    <div className="main-page grid grid-cols-2">
        <MapContainer center={cordinates}/>
        <TripContainer onLoad={onLoad} onPlaceChanged={onPlaceChanged}/>
      </div>
  )
}

export default Trip