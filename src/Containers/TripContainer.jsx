import PlaceCard from "../Containers/PlaceCard";
import Button from "../Components/Button/Button";
import { FaSearch, FaSave, FaPencilAlt, FaLocationArrow, FaCalendar } from "react-icons/fa";
import NavBar from "./NavBar";
import TripHeader from "./TripHeader";
import { useState } from "react";

function TripContainer({image="sdf"}) {
  const [notes, setNotes] = useState('');

  return (
    <div className="h-screen">
        <NavBar />
        <TripHeader image="s"/>
        <div className="p-4">
            <p className="text-2xl">Notes</p>
            <div className="bg-blue-100 h-16 rounded w-3/4 whitespace-pre-wrap overflow-y-auto" contentEditable onInput={(e) => setNotes(e.target.innerText)}>
                <p>{notes}</p>
            </div>
            <p>Add places, drag and drop [form]</p>
            <PlaceCard />
            {/* <Button icon={<FaSearch />}>Search</Button> */}
            {/* <Button icon={<FaSave/>} className="bg-red-500">Save</Button> */}
        </div>
    </div>
  );
}

export default TripContainer;
