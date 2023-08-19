import React from 'react'
import NewToDo from './NewToDo'

function TodoTimeLine() {
  return (
    <div className='line border-l-4 border-red-200 relative'>
        <div className='p-5'>
            <div className='card bg-slate-200 p-3 rounded-md'>
                <NewToDo/>
            </div>
        </div>
    </div>
  )
}

export default TodoTimeLine