import React, {useState} from 'react'
import PlaceCard from './PlaceCard'
import SearchPlace from '../Components/Place/SearchPlace'
import TimeLineContainer from './TimeLineContainer';

function TripItineraryContainer({onLoad, onPlaceChanged, trip = [], day}) {
    const [notes, setNotes] = useState('');
  return (
    <div>
        {/* <p className="mb-2">Wednesday, 23rd September</p>
        {places.length > 0 && places.map(place => (
                <PlaceCard place={place}/>
            ))}
        <SearchPlace onLoad={onLoad} onPlaceChanged={onPlaceChanged}/> */}
        
        <TimeLineContainer onLoad={onLoad} onPlaceChanged={onPlaceChanged} itenary={trip.itenary} day={day}/>
    </div>
  )
}

export default TripItineraryContainer