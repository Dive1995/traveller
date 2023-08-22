import React, {useState} from 'react'
import TimeLineContainer from '../TimeLineContainer';

function TripItinerary({onLoad, onPlaceChanged, trip = [], day, addTodoToItenary}) {
    const [notes, setNotes] = useState('');
  return (
    <div className='mx-6'>
        <p className="mb-2 text-lg">{trip.date}</p>
        
        <TimeLineContainer onLoad={onLoad} onPlaceChanged={onPlaceChanged} itenary={trip.itenary} day={day} addTodoToItenary={addTodoToItenary}/>
    </div>
  )
}

export default TripItinerary