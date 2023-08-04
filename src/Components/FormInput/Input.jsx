import React from 'react'

function Input({name, placeholder, label, value, type = "text"}) {
  return (
      <div className=' w-3/5 flex justify-between items-center my-2'>
          <label className='mr-4' htmlFor={name}>{label}</label>
          <input 
          className='p-2 border-2 border-slate-300 rounded-lg w-96'
          type={type} 
          placeholder={placeholder} 
          name={name} 
          value={value}/>
      </div>
  )
}

export default Input