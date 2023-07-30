import React from 'react'
import CardHeader from '../Components/Card/CardHeader'
import CardBody from '../Components/Card/CardBody'
import CardFooter from '../Components/Card/CardFooter'

function PlaceCard() {
  return (
    <div className='bg-slate-100 w-96 p-2 rounded-md'>
        <CardHeader title="Trip to Berlin" image='./berlin.jpg'/>
        <CardBody content="Starting from 17th Nov"/>
        <CardFooter/>
    </div>
  )
}

export default PlaceCard