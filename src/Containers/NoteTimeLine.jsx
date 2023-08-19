import React from 'react'
import NewNote from './NewNote'

function NoteTimeLine() {
  return (
    <div className='line border-l-4 border-red-200 relative'>
        <div className='p-5'>
            <NewNote/>
        </div>
    </div>
  )
}

export default NoteTimeLine