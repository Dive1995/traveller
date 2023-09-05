import React, {useEffect, useState} from 'react'
import PlaceTimeLine from './../PlaceTimeLine';
import NoteTimeLine from './../NoteTimeLine';
import TodoTimeLine from './../TodoTimeLine';
import Button from './../../Components/Button/Button';
import SearchPlace from './../../Components/Place/SearchPlace'
import { FaList, FaStickyNote } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { newNote, newTodo } from '../../features/trip/trip-slice';
import DragAndDropList from '../DragAndDrop/DragAndDropList';



function TripItinerary({trip = [], day}) {
    const [notes, setNotes] = useState('');
    const [timeLine, setTimeLine] = useState(trip.itenary || []);

    const dispatch = useDispatch();

  useEffect(() => {
    setTimeLine(trip.itenary || []);
  }, [trip]);

  function createNewNote(){
    const id = Math.floor(100000 + Math.random()*900000);
    dispatch(newNote({id:id, type: "note"}));
  }

  function createNewTodo(){
    const id = Math.floor(100000 + Math.random()*900000);
    dispatch(newTodo({id:id, type: "todo"}));
  }

  // reorder item in the list
  const reorder = (list, initialIndex, finalIndex) => {
    const result = Array.from(list);
    const [removedItem] = result.splice(initialIndex, 1);
    result.splice(finalIndex, 0, removedItem);

    return result;
  }

  // will be called when an item is dragged and released
  const handleDragEnd = ({destination, source}) => {
    console.log("Drag end");
    if(!destination) return;

    setTimeLine(reorder(timeLine, source.index, destination.index));
  }

  return (
    <div className='mx-6'>
        <p className="mb-2 text-lg">{trip?.date}</p>
        
      <div className="my-4">
        <DragAndDropList 
        onDragEnd={handleDragEnd} 
        list={timeLine} 
        dragItemStyle={{
          background: 'pink',
          borderRadius: '16px',
        }}
        dragListStyle={{
          background: 'lightblue',
          borderRadius: '16px',
        }}>
          {
            (item) => (
              item.type === "place" ? <PlaceTimeLine place={item}/> : (item.type === "note" ? <NoteTimeLine/> : (item.type === "todo" ? <TodoTimeLine todo={item}/> : null))
            )
          }
        </DragAndDropList>

        {/* {notes.map(note => <NewNote note={note}/>)} */}

        <div className='flex gap-2'>
          <SearchPlace day={day}/>
          <Button className='bg-blue-200' icon={<FaStickyNote/>} onClick={() => createNewNote()}></Button>
          <Button className='bg-blue-200' icon={<FaList/>} onClick={() => createNewTodo()}></Button>
        </div>
      </div>
    </div>
  )
}

export default TripItinerary