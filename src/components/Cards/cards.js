import React from 'react'
import './cards.css'

function Cards  ({title}) {
  return (
    <div className='card-container'>
        <div className='cards-title'>
            <h1>{title}</h1>
        </div>
        <div className='btn'>
            <button >
                <a href='/admin/Promotion/SchoolYear' style={{textDecoration:"none"}}>View more</a>
            </button>
        </div>
        



    </div>
  )
}

export default Cards