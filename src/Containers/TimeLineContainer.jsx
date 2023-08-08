import React, { useState } from 'react'
import berlin from '../berlin.jpg'
import PlaceCard from './PlaceCard'
import SearchPlace from '../Components/Place/SearchPlace'
import Button from '../Components/Button/Button';
import { FaList, FaStickyNote } from 'react-icons/fa';

function TimeLineContainer({places = [], onLoad, onPlaceChanged}) {
  const [timeLine, setTimeLine] = useState();
  return (
    <div className="">
      {places.map(place => <div className='line border-l-4 border-red-200 relative'>
          <div className='number absolute h-6 w-6 bg-red-300 rounded-full flex items-center justify-center -left-3 top-10'>1</div>
          <div className='px-5'>
          <PlaceCard place={place}/>
            <div className='card bg-slate-200 p-3 rounded-md'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
            </div>
          </div>
          <div className='p-5'>
            <div className='card bg-slate-200 p-3 rounded-md'>
              Lorem Ipsum is simply dummy 
            </div>
          </div>
        </div>)}

        <div className='flex'>
          <SearchPlace onLoad={onLoad} onPlaceChanged={onPlaceChanged}/>
          <Button className='bg-blue-200' icon={<FaStickyNote/>} onClick={() => places.push({name: "asdfsdf"})}></Button>
          <Button className='bg-blue-200' icon={<FaList/>} onClick={() => places.push({name: "qweqweqe"})}></Button>
        </div>
        
        

        {/* <div className="relative w-full h-56 flex items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
        </div> */}
    </div>
  )
}

export default TimeLineContainer