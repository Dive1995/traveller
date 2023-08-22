import TripOverview from "./TripOverview"


function TripMenu() {
  return (
    <>
        <ul className='list-none flex gap-5 justify-center items-center'>
            <li><a href="" className='font-bold'>Overview</a></li>
            <li><a href="">Itinerary</a></li>
            <li><a href="">Expenses</a></li>
        </ul>    

        {/* <TripOverview/> */}
    </>
  )
}

export default TripMenu