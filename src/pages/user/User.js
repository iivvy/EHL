// import {
//   CalendarToday,
//   LocationSearching,
//   MailOutline,
//   PermIdentity,
//   PhoneAndroid,
//   Publish,
// } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Home from "../Base/Home";
import "./user.css";

export default function Userr() {
  return (
    <div className="user">
      <Home/>
      <div className="user__header">
        <h1>User Profile</h1>
        </div>
        <div className="profile-container">
          <div className="image-container">
            <img src="https://i1.sndcdn.com/avatars-wX7GkYqEmIrcMzNA-y7cYkQ-t500x500.jpg" alt="profile" />
            <h1>Olivia rodrigo</h1>
            <h1 style={{marginTop:"20px",fontSize:"26px",color:"#A4A4A4"}}>1289643456</h1>
          </div>
          <div className="profile-info">
            <div className="info-general">
              <h2>User Profile</h2>
              <div className="perso">
                <h3>Gender: Female</h3>
              </div>
              <div className="perso">
                <h3>Birth date: 11/05/2001</h3>
              </div>
              <div className="perso">
                <h3>Adresse: Ain Temouchent</h3>
              </div>
            </div>
            <div className="scholar-info">
              <h3>scholar profile</h3>
              <div className="scholar">
                <h3>Promotion: 1CS</h3>
              </div>
              <div className="scholar">
                <h3>Groupe: 05</h3>
              </div>
              <div className="scholar">
                <h3>Type: Etudiant</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
