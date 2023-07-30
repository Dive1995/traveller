import Button from "./Components/Button";
import { FaBeer, FaSave, FaSearch } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="main-page grid grid-cols-2">
        <div className="bg-red-200 h-screen">
          <p>Title card [editable], with cover</p>
          <p>Notes</p>
          <p>Add places, drag and drop [form]</p>
          <Button icon={<FaSearch/>}>Search</Button>
          <Button icon={<FaSave/>} className="bg-red-500">Save</Button>
        </div>
        <div className="bg-slate-300 h-screen">map</div>
      </div>
    </div>
  );
}

export default App;
