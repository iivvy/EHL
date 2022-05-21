import React from 'react'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars'
import './SideWindow.css'
import {MdAddCircle} from 'react-icons/md';


function SideWindow  (){
  return (
    <div className='sideCard'>
        <div className='calendar'>
          <Calendar/>
        </div>
        <div className='eventCard-container'>
          {/* <h4> Les évènements <MdAddCircle style={{height:'25px',width:'25px' ,color:"black"}}/></h4> */}
          <h4 > Les évènements </h4>
          {/* <MdAddCircle style={{height:'30px',width:'30px' ,color:"black"}}/> */}
          <EventCard title='Réunion du conseil scientifique de l’ecole' 
          image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/conseil-scientifique-800x550-1.jpg'
          pub='AMAR BENSABER Djamel'/>
            <EventCard title='Concours national d’accès au second cycle 2021' 
          image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/concours.png'
          pub='AMAR BENSABER Djamel'/>
            <EventCard title='Réunion du conseil scientifique de l’ecole' 
          image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/conseil-scientifique-800x550-1.jpg'
          pub='AMAR BENSABER Djamel'/>
        </div>
    </div>
  )
}
function Calendar(){

  return(
    <CalendarComponent ></CalendarComponent>
  )
  
}
function EventCard({title,image,pub}){
  return(
    <div className='eventCard'>
      <div className='eventCard-image'>
        <img src={image} alt=''/>
      </div>
      <div className='eventTitle'>
        <h5>{title}</h5>
      </div>
      <div className='eventPublisher'>
        <h6>Par - {pub}</h6>
      </div>
    
      
    </div>

  )

}
export default SideWindow