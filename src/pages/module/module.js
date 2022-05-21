import React from 'react'
import Cards from '../../components/Cards/cards'
import SideWindow from '../../components/sideWindow/sideWindow'
import Home from '../Base/Home'

const Module = () => {
  return (
    
    <div className='cards'>
    <SideWindow/>
       <h1 style={{textAlign:'left',marginBottom:"19px",marginLeft:"300px",marginTop:"1px",color:"black"}}>Choisissez une promotion</h1>

        <Cards title='1 CP'/>
        <Cards title='2 CP'/>
        <Cards title='1 CS'/>
        <Cards title='2 CS'/>
        <Cards title='3 CS'/>
    </div>
  
 
    
  )
}

export default Module