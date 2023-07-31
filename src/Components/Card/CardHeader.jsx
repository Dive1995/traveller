import React from 'react'

function CardHeader({title, image}) {
  return (
    <div className='w-full'>
        {image ? <div className={`relative w-full h-44 bg-[url('./berlin.jpg')] bg-cover bg-center`}>
          <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-slate-300 to-transparent">
            <h3 className="text-white text-2xl">{title}</h3>
          </div>
        </div> :
        <div className="p-4">
          <h3 className="text-white text-2xl">{title}</h3>
        </div>
        }
        {/* <div className="card-body">
            <h3 className="text-2xl">{title}</h3>
        </div> */}
    </div>
  )
}

export default CardHeader