import React from 'react'
import "./Card.css"

const Card = ({title,details,unit}) => {
  return (
    <div className='weather-card'>
      <h5>{title}</h5>
      <p>{details}{unit}</p>
    </div>
  )
}

export default Card