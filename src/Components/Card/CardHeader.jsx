import React from 'react'

function CardHeader({title, description}) {
  return (
    <div className='w-full flex flex-col justify-center'>        
      <h3 className="font-bold">{title}</h3>
      {description && <h4 className=''>{description}</h4>}
    </div>
  )
}

export default CardHeader