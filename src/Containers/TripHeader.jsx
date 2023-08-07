import { FaLocationArrow, FaCalendar } from "react-icons/fa";

function TripHeader({image}) {
  return (
    <div>
        {image ? <div className={`relative w-full h-56 bg-[url('./berlin.jpg')] bg-cover bg-center`}>
            <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-slate-900 to-transparent flex justify-between items-center">
                <h1 className="text-3xl flex text-white items-center gap-2"><FaLocationArrow size={25}/> Trip to Berlin</h1>
                <p className="text-white flex items-center gap-2"><FaCalendar size={20}/>23/7 - 29/7</p>
            </div>
        </div> : 
        <div className="p-4 flex justify-between items-center my-4">
            <h1 className="text-3xl flex items-center gap-2"><FaLocationArrow size={25}/> Trip to Berlin</h1>
            <p className="flex items-center gap-2"><FaCalendar size={20}/>23/7 - 29/7</p>
        </div>
        }
    </div>
  )
}

export default TripHeader