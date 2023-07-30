import PlaceCard from "../Containers/PlaceCard"
import Button from "../Components/Button/Button";
import { FaSearch } from "react-icons/fa";

function Trip() {
  return (
    <div className="main-page grid grid-cols-2">
        <div className="h-screen">
          <p>Title card [editable], with cover</p>
          <p>Notes</p>
          <p>Add places, drag and drop [form]</p>
          <PlaceCard/>
          <Button icon={<FaSearch/>}>Search</Button>
          {/* <Button icon={<FaSave/>} className="bg-red-500">Save</Button> */}
        </div>
        <div className="bg-slate-300 h-screen">map</div>
      </div>
  )
}

export default Trip