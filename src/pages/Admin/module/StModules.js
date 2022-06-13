import React from 'react'
import CardModule from '../../../components/Cards/CardModule';
import Home from '../../Base/Home';
import AddModule from './AddModule';

const StModules = () => {
  return (
    <div>
      <Home/>
    <div>
      <button className='stbutton'>Créer Module</button>
      
      <div  className="firstCol">
       <CardModule  Title='Gestion de Projets' image='https://www.esi-sba.dz/fr/wp-content/uploads/2021/02/AMAR-BENSABER-Djamel-300x300.jpg' prof="Mr. AMAR BENSABER Djamel "/>
       <CardModule  Title='Réseaux 2' image='https://www.esi-sba.dz/fr/wp-content/uploads/2021/04/azza-mohammed.jpg' prof="Mr. AZZA Mohammed"/>
       <CardModule Title='Langages et outils web ' image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/benslimane-sidimohamed-300x300.jpg' prof='Mr. BENSLIMANE Sidi Mohammed'/>
       <CardModule Title='Analyse et conception des systèmes d’information' image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/malki-mimoun-300x300.jpg' prof='Mr. MALKI Mimoun'></CardModule>
       <CardModule Title='Analyse et conception des systèmes d’information' image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/malki-mimoun-300x300.jpg' prof='Mr. MALKI Mimoun'></CardModule>
       <CardModule Title='Analyse et conception des systèmes d’information' image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/malki-mimoun-300x300.jpg' prof='Mr. MALKI Mimoun'></CardModule>
       <CardModule Title='Analyse et conception des systèmes d’information' image='https://www.esi-sba.dz/fr/wp-content/uploads/2020/10/malki-mimoun-300x300.jpg' prof='Mr. MALKI Mimoun'></CardModule>
      </div>
    
     
      </div>
    </div>
  )
}

export default StModules