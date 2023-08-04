import React from 'react'

function IconContainer({icons = []}) {
  return (
    <div className='flex gap-2'>
      {icons.map((icon) => <span className='border-2 p-1 rounded-md hover:bg-slate-100 cursor-pointer'>
        {icon}
      </span>)}
    </div>
  )
}

export default IconContainer