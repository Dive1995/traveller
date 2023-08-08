import React, {useState} from 'react'
import PlaceCard from './PlaceCard'
import SearchPlace from '../Components/Place/SearchPlace'
import TimeLineContainer from './TimeLineContainer';

function TripItineraryContainer({onLoad, onPlaceChanged, places = []}) {
    const [notes, setNotes] = useState('');
  return (
    <div>
        {/* <p className="mb-2">Wednesday, 23rd September</p>
        {places.length > 0 && places.map(place => (
                <PlaceCard place={place}/>
            ))}
        <SearchPlace onLoad={onLoad} onPlaceChanged={onPlaceChanged}/>
        <p className="text-2xl">Notes</p> */}
        {/* <div className="bg-blue-100 h-16 rounded w-3/4 whitespace-pre-wrap overflow-y-auto" placeholder="Add something here." contentEditable onInput={(e) => setNotes(e.target.innerText)}>
            <p>{notes}</p>
        </div> */}
        <TimeLineContainer onLoad={onLoad} onPlaceChanged={onPlaceChanged} places={places}/>
    </div>
  )
}

export default TripItineraryContainer