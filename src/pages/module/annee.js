
import React from 'react'
import YearCard from '../../components/Cards/yearCard';
import {BsPlusLg} from 'react-icons/bs';
import './annee.css'
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
    <div className='annee'>
      <YearCard title='Année universitaire 2021-2022' />
      <YearCard title='Année universitaire 2020-2021' />
      <YearCard title='Année universitaire 2019-2020' />
      <NewYear/>
      

    </div>
  )
}

export default Annee