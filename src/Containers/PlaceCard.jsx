import React, { useState } from 'react'
import CardHeader from '../Components/Card/CardHeader'
import CardBody from '../Components/Card/CardBody'
import CardCover from '../Components/Card/CardCover'

function PlaceCard({place}) {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div key={place.id} className="grid grid-cols-4">
      <p>place card</p>
        <CardCover imageUrl={place.photoUrl}/>
        <div className="col-span-3">
          <CardHeader title={place.name} description="Nice place to get some coffee."/>
          {/* <p>9.00 a.m - 11.00 a.m</p> */}
          <p>{place.phoneNumber}</p>
          {/* {viewMore ? <CardBody className="bg-blue-50">
            <p>Contrary to popular belief, Lorem Ipsum is onsectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <a className="text-gray-500 cursor-pointer" onClick={() => setViewMore(false)}>Show less</a>
          </CardBody> : 
          <a className="text-gray-500 cursor-pointer" onClick={() => setViewMore(true)}>View more</a>
          } */}
        </div>
    </div>
  )
}

export default PlaceCard