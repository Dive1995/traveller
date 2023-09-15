import React from 'react'

function CardCover({imageUrl}) {
  return (
    <div className={`relative w-48 h-28 mb-4 bg-cover bg-center rounded-lg overflow-hidden`}>
        <img src={imageUrl} alt="" className="w-full h-full object-cover"/>
    </div>
  )
}

export default CardCover