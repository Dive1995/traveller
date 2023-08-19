import React from 'react'
import PlaceCard from './PlaceCard'

function PlaceTimeLine({place}) {
  return (
    <div className='line border-l-4 border-red-200 relative'>
        <div className='number absolute h-6 w-6 bg-red-300 rounded-full flex items-center justify-center -left-3 top-10'>1</div>
          <div className='px-5'>
            <PlaceCard place={place}/>
          </div>
    </div>
  )
}

export default PlaceTimeLine