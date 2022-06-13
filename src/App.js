import React from "react";
import { Route,Routes ,BrowserRouter} from "react-router-dom";
import Enseignant from "./pages/Admin/database/enseignantBd";
import Etudiant from "./pages/Admin/database/etudiantBd";
import AjouterStudent from "./pages/Admin/users/student/AddStudents";
import FormLogin from "./pages/Login/FormLogin";

import Promotion from "./pages/Admin/module/promotionPage";
import Annee from "./pages/Admin/module/annee";
import StModules from "./pages/Admin/module/StModules";
import NdModule from "./pages/Admin/module/NdModule";
import UploadStudent from "./pages/Admin/users/student/uploadExcel/UploadExcel";
import AjouterEnseignant from "./pages/Admin/users/teacher/AjouterEnseignant";
import Home from "./pages/Base/Home";
import Salle from "./pages/Admin/salle/Salle";
import LoginForm from "./test";
import Test from "./test";
import Mpasse from "./pages/Login/Mpasse/Mpasse";
import Calendar from "./components/calendar/Calendar";

import EditStudentProfile from "./pages/Admin/users/student/studentProfile/EditStudentProfile";
import EditTeacherProfile from "./pages/Admin/users/teacher/editProfile/EditTeacherProfile";
import Form from "./pages/Login/Form";

function App() {
  return(
    <div className='App'>
      
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path="/Profile" element={<Home/>}/>
          <Route path="/Settings" element/>
          <Route path="Etudiant">
            <Route index  element={<StModules/>}></Route>

          </Route>
       
          {/* Admin routes */}
          <Route path="admin" >
           <Route  index element={<StModules/>}/>
             <Route path="StudentDB" element={<Etudiant/>}/>
             <Route path="StudentDB/:studentId/edit" element={<EditStudentProfile/>}/>
             <Route path="TeacherDB" element={<Enseignant/>}/>
             <Route path="TeacherDB/:teacherId/edit" element={<EditTeacherProfile/>}/>
             <Route path="TeacherDB/newMan" element={<AjouterEnseignant/>}/>
             <Route path="TeacherDB/newAuto" element/>
             <Route path="StudentDB/newMan" element={<AjouterStudent/>}/>
             <Route path="StudentDB/newAuto" element={<UploadStudent/>}/>
             <Route path="Promotion" element={<Promotion/>}/>
             <Route path="Promotion/SchoolYear" element={<Annee/>}/>
             <Route path="Promotion/SchoolYear/StModule" element={<StModules/>}/>
             <Route path="Promotion/SchoolYear/NdModule" element={<NdModule/>}/>
             <Route path="Events" element/>
             <Route path="Events/:EventsId" element/>
             <Route path="Events/newEvent" element/>
             <Route path="TimeTable" element={<Calendar/>}/>
             <Route path="Chat" element/>
             <Route path="Salle" element={<Salle/>}/>
             <Route path='test' element={<Test/>}/>
             </Route>
             
             
          {/* Teacher Routes */}
          {/* <Route path='Enseignant'>
					<Route path="/teacher" element />
					<Route path="/teacher/courses" element />
					<Route path="/teacher/schedule" element />
					<Route path="/teacher/Events" element />
				</Route>
          {/* Student Routes */}
          {/*<Route path='Etudiant'>
				
					<Route path="courses" element />
					<Route path="schedule" element/>
					<Route path="Events" element />
				</Route> */}
        
          {/* NOTE: Follow the pattern */}
       

    
 
  </Routes>
  </BrowserRouter>

</div>
  
  )}

export default App;
