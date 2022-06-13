
import React from 'react'
import {BsPlusLg} from 'react-icons/bs';
import './annee.css'
import YearCard from '../../../components/Cards/yearCard';
import AddYear from '../Promotion/AddYear'
import Home from '../../Base/Home';
const NewYear = () => {
  return(
    <div className='newYear'>
      <div className='add'> 
        <BsPlusLg />
        <p> Ajouter une année universitaire</p>
       
        
         
      </div>
    </div>
  )
}


const Annee = () => {
  return (
    <div>
      <Home/>
    <div className='annee'>
      <AddYear/>
      
      <YearCard title='Année universitaire 2021-2022' />
      <YearCard title='Année universitaire 2020-2021' />
      <YearCard title='Année universitaire 2019-2020' />

        
     
      
      

    </div>
    </div>
  )
}

export default Annee