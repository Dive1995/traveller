import React from 'react'
import NewToDo from './NewToDo'

function TodoTimeLine({todo, color}) {
  return (
    <div className='line border-l-2 relative' style={{borderColor: color}}>
        <div className='p-5'>
            <div className='card bg-slate-200 p-3 rounded-md'>
                <NewToDo todo={todo}/>
            </div>
        </div>
    </div>
  )
}

export default TodoTimeLine