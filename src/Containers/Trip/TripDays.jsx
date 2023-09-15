import React from 'react'

function TripDays({trips}) {
  return (
    <div className=" flex justify-center items-center my-2">
        {trips.map(trip => <span 
        key={trip.day}
        className="flex justify-center items-center 
        bg-blue-200 p-3 rounded-full w-10 h-10 mx-1 
        hover:font-bold hover:cursor-pointer">{trip.day}</span>)}
    </div>
  )
}

export default TripDays