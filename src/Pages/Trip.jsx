import { useState, useEffect, useRef } from "react"
import MapContainer from "../Containers/MapContainer"
import NavBar from "../Containers/NavBar"
import TripContainer from "../Containers/TripContainer"
import { useLoadScript } from '@react-google-maps/api'

function Trip() {
  const [cordinates, setCordinates] = useState({lat:43, lng: -80});
  // const [autoComplete, setAutoComplete] = useState(null);
  const autoCompleteRef = useRef();
  const mapRef = useRef(null);
  // const [places, setPlaces] = useState([]); //TODO: places will have date, so that we can have multiple day trips
  const [trip, setTrip] = useState([
    {
      day: 1,
      date: "2nd, September 2023",
      totalExpense: 500,
      itenary: []
    },
      {
      day: 2,
      date: "3rd, September 2023",
      totalExpense: 1200,
      itenary: []
    },
      {
      day: 3,
      date: "4th, September 2023",
      totalExpense: 800,
      itenary: []
    }
  ]);

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
      console.log("onPlaceCHanged should be called seconds")

      const map = mapRef.current;
      map.panTo({lat, lng});
      
      let photoUrl;
      if (place.photos && place.photos.length > 0) {
        photoUrl = place.photos[0].getUrl();
        console.log("Photo url: ", photoUrl);
      }

      //TODO: should add place to the end of correspoding day's itinerary
      const updatedTrip = trip.map(trip => {
        if(trip.day === day){
          console.log("Add for day ",trip.day)
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
          console.log("Not the day we are planning");
          return trip
        }
      })
      // const selectedDayTrip = trip.filter(trip => trip.day === day);
      // selectedDayTrip.itenary.push({
      //   type: "place",
      //   id: place.place_id, 
      //   name: place.name, 
      //   address: place.formatted_address, 
      //   website: place.website, 
      //   photoUrl: photoUrl,
      //   rating: place.rating,
      //   user_ratings_total: place.user_ratings_total,
      //   phoneNumber: place.international_phone_number,
      //   website: place.website
      // });

      setTrip(updatedTrip);

      // setTrip([...trip, {
      //     id: place.place_id, 
      //     name: place.name, 
      //     address: place.formatted_address, 
      //     website: place.website, 
      //     photoUrl: photoUrl,
      //     rating: place.rating,
      //     user_ratings_total: place.user_ratings_total,
      //     phoneNumber: place.international_phone_number,
      //     website: place.website
      //   }]);
    }

  }

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ["places"]
  });
  
  if(!isLoaded) return <div>Loading...</div>
  return (
    <div className="main-page grid grid-cols-2">
        <MapContainer center={cordinates} places={trip[0].itenary.filter(itenary => itenary.type === "place")}/>
        <TripContainer onLoad={onLoad} onPlaceChanged={onPlaceChanged} trip={trip}/>
      </div>
  )
}

export default Trip