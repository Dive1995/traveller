import React, {useState} from 'react'
import PlaceTimeLine from './../PlaceTimeLine';
import NoteTimeLine from './../NoteTimeLine';
import TodoTimeLine from './../TodoTimeLine';
import Button from './../../Components/Button/Button';
import SearchPlace from './../../Components/Place/SearchPlace'
import { FaList, FaStickyNote } from 'react-icons/fa';


function TripItinerary({onLoad, onPlaceChanged, trip = [], day, addTodoToItenary}) {
    const [notes, setNotes] = useState('');
    const [timeLine, setTimeLine] = useState(trip.itenary || []);
  return (
    <div className='mx-6'>
        <p className="mb-2 text-lg">{trip?.date}</p>
        
        <div className="my-4">
      {timeLine.map(item => {
        if(item.type == "place"){
          return <PlaceTimeLine place={item}/>
        }else if(item.type == "note"){
          return <NoteTimeLine/>
        }else if(item.type == "todo"){
          return <TodoTimeLine todo={item}/>
        }
        return null;
      })}

        {/* {notes.map(note => <NewNote note={note}/>)} */}

        <div className='flex gap-2'>
          <SearchPlace onLoad={onLoad} onPlaceChanged={onPlaceChanged} day={day}/>
          <Button className='bg-blue-200' icon={<FaStickyNote/>} onClick={() => setTimeLine({...timeLine, itenary: [...timeLine.itenary, {id:1212, type: "note"}]})}></Button>
          <Button className='bg-blue-200' icon={<FaList/>} onClick={() => addTodoToItenary(day)}></Button>
        </div>
    </div>
    </div>
  )
}

export default TripItinerary