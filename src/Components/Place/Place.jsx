import React from 'react'

function Place({place}) {
  return (
    <div>
        <input className='p-2 border-2 rounded' type="text" value={place}/>
    </div>
  )
}

export default Place