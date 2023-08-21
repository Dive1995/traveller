import React, { useEffect, useState } from 'react'
import berlin from '../berlin.jpg'
import PlaceCard from './PlaceCard'
import SearchPlace from '../Components/Place/SearchPlace'
import Button from '../Components/Button/Button';
import { FaList, FaStickyNote } from 'react-icons/fa';
import NewNote from './NewNote';
import NewToDo from './NewToDo';
import PlaceTimeLine from './PlaceTimeLine';
import NoteTimeLine from './NoteTimeLine';
import TodoTimeLine from './TodoTimeLine';

const itenaries = [ //contains all the days plan
  {
    day: 1,
    date: "2nd, September 2023",
    totalExpense: 500,
    itenary: [
      {
        id: 234234,
        type: "place",
        name: "Berlin Museum",
        description: "Has some old books",
        phoneNumber: "075-896876"
      },
      {
        id: 8943,
        type: "note",
        title: "Before the trip",
        content: "Make sure to visit Stugart"
      },
      {
        id: 1863,
        type: "todo",
        title: "Things to bring",
        list: ['shorts', 'shirt', 'passport']
      },
      {
        id: 2344,
        type: "note",
        title: "Take care of",
        content: "Some more notes"
      },
      {
        id: 234,
        type: "todo",
        title: "Things not to bring",
        list: ['laptop', 'money']
      }
    ]
  }
]

function TimeLineContainer({itenary = [], onLoad, onPlaceChanged, day, addTodoToItenary}) {
  const [timeLine, setTimeLine] = useState(itenary);
  // const [timeLine, setTimeLine] = useState({
  //   day: 1,
  //   date: "2nd, September 2023",
  //   totalExpense: 500,
  //   itenary: [
  //     // {
  //     //   id: 234234,
  //     //   type: "place",
  //     //   name: "Berlin Museum",
  //     //   description: "Has some old books",
  //     //   phoneNumber: "075-896876"
  //     // },
  //     // {
  //     //   id: 8943,
  //     //   type: "note",
  //     //   title: "Before the trip",
  //     //   content: "Make sure to visit Stugart"
  //     // },
  //     // {
  //     //   id: 1863,
  //     //   type: "todo",
  //     //   title: "Things to bring",
  //     //   list: ['shorts', 'shirt', 'passport']
  //     // },
  //     // {
  //     //   id: 2344,
  //     //   type: "note",
  //     //   title: "Take care of",
  //     //   content: "Some more notes"
  //     // },
  //     // {
  //     //   id: 234,
  //     //   type: "todo",
  //     //   title: "Things not to bring",
  //     //   list: ['laptop', 'money']
  //     // }
  //   ]
  // });
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setTimeLine(itenary)
  },[itenary])

  return (
    <div className="my-4 overflow-y-scroll">
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
  )
}

export default TimeLineContainer