import React, { useEffect } from 'react'
import PlaceCard from './PlaceCard'

function PlaceTimeLine({place, color}) {
  useEffect(() => {
    console.log(color);
  },[])
  
  return (
    <div className={`line border-l-2 relative`} style={{borderColor: color}}>
        <div 
          className={`number absolute h-6 w-6 rounded-full flex items-center justify-center -left-3 top-10 z-10`}
          style={{backgroundColor: color}}
        >{place.order}</div>
          <div className='px-5'>
            <PlaceCard place={place}/>
          </div>
    </div>
  )
}

export default PlaceTimeLine