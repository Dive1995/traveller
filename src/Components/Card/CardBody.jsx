import React from 'react'

function CardBody({children, className}) {
  return (
    <div className={className}>{children}</div>
  )
}

export default CardBody