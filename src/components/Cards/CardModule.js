import React from 'react'
import './CardModule.css'

const CardModule = ({Title,image,prof}) => {
  return (
    <div className='cardmodule'>
        <div className='module-image'>
            <img src={image}></img>
        </div>
        <div className='module-title'>
            <h1>{Title}</h1>
        </div>
        <div className='module-prof'>
            <h4>{prof}</h4>
        </div>
    </div>
  )
}

export default CardModule