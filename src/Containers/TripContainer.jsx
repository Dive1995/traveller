import { FaSearch, FaSave, FaPencilAlt, FaLocationArrow, FaCalendar } from "react-icons/fa";
import NavBar from "./NavBar";
import TripHeader from "./TripHeader";
import { useState } from "react";
import TripMenuContainer from "./TripMenuContainer";
import TripItineraryContainer from "./TripItineraryContainer";
import PlaceCard from "./PlaceCard";
import SearchPlace from "../Components/Place/SearchPlace";


function TripContainer({image="sdf", onLoad, onPlaceChanged, places = []}) {
  
  return (
    <div className="h-screen">
        <NavBar />
        <TripHeader image="s"/>
        <div className="p-4">
            <TripMenuContainer/>
            <TripItineraryContainer onLoad={onLoad} onPlaceChanged={onPlaceChanged} places={places}/>
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