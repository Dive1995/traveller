import PlaceCard from "../Containers/PlaceCard";
import Button from "../Components/Button/Button";
import { FaSearch, FaSave, FaPencilAlt, FaLocationArrow, FaCalendar } from "react-icons/fa";
import NavBar from "./NavBar";
import TripHeader from "./TripHeader";
import { useState } from "react";
import PlaceForm from "./PlaceForm";
import Place from "../Components/Place/Place";
import { Autocomplete } from "@react-google-maps/api";

function TripContainer({image="sdf", onLoad, onPlaceChanged, isMapLoaded}) {
  const [notes, setNotes] = useState('');
  

  return (
    <div className="h-screen">
        <NavBar />
        <TripHeader image="s"/>
        <div className="p-4">
            {/* <p className="text-2xl">Notes</p>
            <div className="bg-blue-100 h-16 rounded w-3/4 whitespace-pre-wrap overflow-y-auto" placeholder="Add something here." contentEditable onInput={(e) => setNotes(e.target.innerText)}>
                <p>{notes}</p>
            </div> */}
            {/* <p>Add places, drag and drop [form]</p> */}
            {/* <Button icon={<FaLocationArrow/>} className="bg-yellow-500">Add a place</Button> */}
            <p className="mb-2">Wednesday, 23rd September</p>
            <PlaceForm/>
            <Place place="Berlin"/>
            {isMapLoaded && <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div>
                    <input type="text" className='p-2 border-2 rounded' placeholder="Search a place..."/>
                </div>
            </Autocomplete>}
            {/* <PlaceCard /> */}
            {/* <Button icon={<FaSearch />}>Search</Button> */}
            {/* <Button icon={<FaSave/>} className="bg-red-500">Save</Button> */}
        </div>
    </div>
  );
}

export default TripContainer;
