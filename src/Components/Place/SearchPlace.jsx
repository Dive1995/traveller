import React, { useRef, useState } from 'react'
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch } from 'react-redux';
import { setCordinates } from '../../features/map/map-slice';
import { addNewPlaceToTimeLine, addIdToItenary } from '../../features/trip/trip-slice';

function SearchPlace({itenary, day}) {
  const [input, setInput] = useState('');
  const autoCompleteRef = useRef();

  const dispatch = useDispatch()

  const onLoad = (ref) => {
    autoCompleteRef.current = ref;
  };

  const onPlaceChanged = () => {
    //FIXME: when a place without cordinates is selected it shouldn't be added to the trip ?
    //TODO: break into smaller relevant functions
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

      console.log(itenary);
      const placesInItenary = itenary?.filter(item => item.type === 'place');

      const placeToAdd = {
        type: "place",
        day: day,
        id: place.place_id,
        order: placesInItenary?.length + 1,
        name: place.name, 
        address: place.formatted_address, 
        website: place.website, 
        photoUrl: photoUrl,
        rating: place.rating,
        user_ratings_total: place.user_ratings_total,
        phoneNumber: place.international_phone_number,
        cordinates: {lat, lng}
      }

      dispatch(setCordinates({lat, lng}));
      dispatch(addNewPlaceToTimeLine(placeToAdd));
      dispatch(addIdToItenary({data:{id:placeToAdd.id, type:placeToAdd.type}, day}));
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