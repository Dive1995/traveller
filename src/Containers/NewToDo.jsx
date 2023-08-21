import React, { useState } from 'react'
import { FaCheckSquare, FaRegSquare, FaSquare } from 'react-icons/fa'

function NewToDo({todo}) {
const [todos, setTodos] = useState([
    {id: 1, content: "Get prepared", checked: false},
    {id: 2, content: "Be ready before 6", checked: true},
    {id: 3, content: "Take camera", checked: false}
]);

const toggleChecked = (todoForUpdate) => {
    //TODO: only mark todos that has content
    const updatedTodo = todos.map((todo) => {
        if(todo.id === todoForUpdate.id){
            return {...todo, checked: !todo.checked}
        }
        return todo;
    });

    setTodos(updatedTodo);
}

const addNewItem = () => {
    setTodos([...todos, {id: 234, content:""}])
}

const handleKeyEvent = (e) => {
    if(e.key === 'Enter' || e.keyCode === 13){
        addNewItem();
    }
}

  return (
    <div>
        <div contentEditable onKeyDown={(e) => handleKeyEvent(e)}>
            <p contentEditable data-placeholder='Title'>{todo.title}</p>
            {todo.list.map((todo) => <p className='flex items-center gap-1'>
                <span className='cursor-pointer' onClick={() => toggleChecked(todo)}>{todo.checked ? <FaCheckSquare/> : <FaRegSquare/>}</span>
                {todo.content}
            </p>)}
            <button onClick={addNewItem}>Add item</button>
        </div>
    </div>
  )
}

export default NewToDo