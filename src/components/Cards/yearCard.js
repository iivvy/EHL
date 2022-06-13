import React from 'react'
import { Button } from 'react-bootstrap'
import './yearCard.css'

const YearCard = ({title}) => {
    return (
        <div className='card'>
            
            <div className='card-title'>
                <h1>{title}</h1>
            </div>
            <div className='semBtn'>
            <Button className='stBtn'>
                <a href='/ADMIN/Promotion/SchoolYear/StModule' style={{textDecoration:"none"}}>semester 1</a>
            </Button>
            <Button className='ndBtn'>
                <a href='/admin/Promotion/SchoolYear/NdModule' style={{textDecoration:"none"}}>semester 2 </a>
            </Button>
            </div>
          
           
         
        </div>
      )
    }

export default YearCard