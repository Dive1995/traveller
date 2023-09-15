import React from 'react'
import NewNote from './NewNote'

function NoteTimeLine({color}) {
  return (
    <div className='line border-l-2relative' style={{borderColor: color}}>
        <div className='p-5'>
            <NewNote/>
        </div>
    </div>
  )
}

export default NoteTimeLine