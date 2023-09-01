import NavBar from "../NavBar";
import TripHeader from "./TripHeader";
import { useEffect, useState } from "react";
import TripDays from "./TripDays";
import TripMenu from "./TripMenu";
import TripItinerary from "./TripItinerary";
import { useSelector } from "react-redux";


function TripContainer({addTodoToItenary}) {
  const [filteredTrip, setFilteredTrip] = useState([]);
  const trips = useSelector(state => state.trips.trips);
  const day = useSelector(state => state.trips.selectedDay);

  useEffect(() => {    
    console.log(trips)
    filterTripByDay();
  }, [day, trips])

  const filterTripByDay = () => {
    const dayTrip = trips.filter(trip => trip.day === day);
    setFilteredTrip(dayTrip);
  }
  
  return (
    <div className="h-screen">
        <NavBar />
        <TripHeader image="s"/>
        <div className="p-4">
            <TripMenu/>

            <TripDays trips={trips}/>

            <TripItinerary trip={filteredTrip[0]} day={day} addTodoToItenary={addTodoToItenary}/>
            {/* <Button icon={<FaSearch />}>Search</Button> */}
            {/* <Button icon={<FaSave/>} className="bg-red-500">Save</Button> */}
        </div>
    </div>
  );
}

export default TripContainer;

//TODO: This page will have tabs: Overview, Itinerary, Expenses
// Each of them are containers having different components
// Itinerary will have a days tabs if its a multiple day vacation
// Overview will have - Total expense, # places in # days, Documents, Notes, Things to pack, Airplane/Transportation details
// Expense will have - expenses from each days, a budget to show how much have spent so far, maybe a graphical view with a bar/pie
// Expenses will - show expenses by each category they have been added day wise, also we can add new expenses with a name we want
// that expenses