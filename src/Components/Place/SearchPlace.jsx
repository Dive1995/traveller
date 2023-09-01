import React, { useRef, useState } from 'react'
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch } from 'react-redux';
import { setCordinates } from '../../features/map/map-slice';
import { addPlace } from '../../features/trip/trip-slice';

function SearchPlace({day}) {
  const [input, setInput] = useState('');
  const autoCompleteRef = useRef();

  const dispatch = useDispatch()

  const onLoad = (ref) => {
    autoCompleteRef.current = ref;
    console.log("onLoad should be called first")
  };

  const onPlaceChanged = () => {
    console.log(autoCompleteRef.current.getPlace());
    const place = autoCompleteRef.current.getPlace();
    
    if(place){
      const lat = place.geometry?.location?.lat();
      const lng = place.geometry?.location?.lng();

      // const map = mapRef.current;
      // map.panTo({lat, lng});
      
      let photoUrl;
      if (place.photos && place.photos.length > 0) {
        photoUrl = place.photos[0].getUrl();
      }

      const placeToAdd = {
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
      }

      console.log("place : ", placeToAdd);
      dispatch(setCordinates({lat, lng}))
      dispatch(addPlace(placeToAdd))
      setInput('');
    }
  }

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} className='border-red-500 flex-grow'>
        <div>
            <input 
              type="text" 
              className='p-2 border-2 rounded-full w-full' 
              placeholder="Search a place..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
        </div>
    </Autocomplete>
  )
}

export default SearchPlace