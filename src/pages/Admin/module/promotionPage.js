import React from 'react'
import Cards from '../../../components/Cards/cards'


import Home from '../../Base/Home'

import AddPromotion from '../Promotion/AddPromotion'
const Promotion = () => {
  return (
    <div>
      <Home/>
    
    <div className='cards'>
    
    <AddPromotion/>
   
  
       <h1 style={{textAlign:'left',marginBottom:"28px",marginLeft:"300px",marginTop:"0px",color:"black"}}>Choisissez une promotion</h1>

        <Cards title='1 CP'/>
        <Cards title='2 CP'/>
        <Cards title='1 CS'/>
        <Cards title='2 CS'/>
        <Cards title='3 CS'/>
        
    </div>
    </div>
  
 
    
  )
}

export default Promotion