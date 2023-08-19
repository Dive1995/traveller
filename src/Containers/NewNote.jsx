import React from 'react'

function NewNote({note, setNotes}) {
  return (
    <div className='max-h-96 bg-slate-200 w-3/4 rounded-md p-2'>
        <p className="text-2xl">Title</p>
        <div className=' '>
            <div className="p-3 rounded whitespace-pre-wrap overflow-y-auto" 
            placeholder="Add something here." 
            contentEditable 
            onInput={(e) => setNotes(e.target.innerText)}
            style={{ minHeight: note?.content ? 'auto' : '50px' }}
            >
                <p className=''>{note?.content ? note?.content : ""}</p>
            </div>
        </div>
    </div>
  )
}

export default NewNote