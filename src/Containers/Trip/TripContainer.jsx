import NavBar from "../NavBar";
import TripHeader from "./TripHeader";
import { useEffect, useState } from "react";
import TripDays from "./TripDays";
import TripMenu from "./TripMenu";
import TripItinerary from "./TripItinerary";
import { useSelector } from "react-redux";


function TripContainer() {
  const [filteredTrip, setFilteredTrip] = useState([]);

  //TODO: if needed create a customHook and use it in multiple places
  const trips = useSelector(state => state.trips.trips.map(trip => {
    // check if itenary is not empty (we don't need to check bz map function will only run if its not empty)
    if(trip.itenary.length > 0){
      // for each itenary replace current value ({id, type}) with the actual content from relevant array (place, todo, notes)
      const updatedItenary = trip.itenary.map(itenary => {
        //TODO: remove hardcoded values/string ('place','todo'...) and create variables and use that
        if(itenary.type === "place"){ 
          return Object.assign({}, ...state.trips.places.filter(place => place.id === itenary.id));
        }else if(itenary.type === "todo"){
          return Object.assign({}, ...state.trips.todos.filter(todo => todo.id === itenary.id));
        }else if(itenary.type === "note"){
          return Object.assign({}, ...state.trips.notes.filter(note => note.id === itenary.id));
        }
        return itenary;
      })

      return {...trip, itenary:updatedItenary}
    }
    return trip
  }));

  // useEffect(() => {    
  //   filterTripByDay();
  //   console.log(trips)
  // }, [day])

  //TODO: filter day related data inside the useSelector itself
  // const filterTripByDay = () => {
  //   const dayTrip = Object.assign({}, ...trips.filter(trip => trip.day === day));
  //   setFilteredTrip(dayTrip);
  // }
  
  return (
    <div className="h-screen overflow-scroll relative shadow-2xl">
        <NavBar />
        <TripHeader image="s"/>
        <div className="p-4">
            <div className="bg-white sticky top-16 z-50 py-1">
              <TripMenu/>
              <TripDays trips={trips}/>
            </div>

            <TripItinerary trips={trips}/>
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