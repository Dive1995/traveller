import React, { useState } from 'react'
import { Autocomplete } from "@react-google-maps/api";

function SearchPlace({onLoad, onPlaceChanged}) {
  const [input, setInput] = useState('');
  const onPlaceChangedFn = () => {
    onPlaceChanged();
    setInput('');
  }

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChangedFn}>
        <div>
            <input 
              type="text" 
              className='p-2 border-2 rounded' 
              placeholder="Search a place..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
        </div>
    </Autocomplete>
  )
}

export default SearchPlace