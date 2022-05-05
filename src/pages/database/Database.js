import "./database.css";
import NavBar from '../../componenets/NavBar';
import React  from 'react';
import TopBar from '../../componenets/TopBar';
import Datatable from '../../componenets/datatable/Datatable';


const Database =() => {
    return(
        <div className ='db'>
          <NavBar/>
            <div className="dbContainer">
                <TopBar/>
                <hr/>
                <Datatable/>
            </div>
           
        </div>
        
    )



}
export default Database