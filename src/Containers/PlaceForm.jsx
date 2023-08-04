import { FaDollarSign, FaHotel, FaPlaceOfWorship } from "react-icons/fa";
import Input from "../Components/FormInput/Input";
import IconContainer from "./IconContainer";

function PlaceForm() {
  return (
    <div>
        <IconContainer icons={[<FaDollarSign size={20}/>, <FaHotel size={20}/>, <FaPlaceOfWorship size={20}/>]}/>
        <Input placeholder="Eg: Berlin" label="Place"/>
        <Input placeholder="Eg: Take purse with you" label="Description"/>
        <Input placeholder="Eg: 4" label="Number of days"/>
    </div>
  )
}

export default PlaceForm