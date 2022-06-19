import React from "react";
import { Route,Routes ,BrowserRouter} from "react-router-dom";
import Enseignant from "./pages/Admin/database/enseignantBd";
import Etudiant from "./pages/Admin/database/etudiantBd";
import Enseignants from "./pages/Enseignant/Enseignants";
import AjouterStudent from "./pages/Admin/users/student/AddStudents";
import Table from "./pages/Admin/users/student/AddStudent";
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
import ProfileEns from "./pages/Admin/Profile/ProfileEns";
import Doc from "./pages/Enseignant/Document /Doc";
import Evaluation from "./pages/Enseignant/Evaluation/Evaluation";
import Mpasse1 from "./pages/Login/Mpasse1/Mpasse1";
import GetTeacher from "./pages/Admin/users/teacher/GetTeacher";
import UploadTeacher from "./pages/Admin/users/teacher/upload teacher/uploadTeacher";
import Datatable from "./components/datatable/Datatable";
import GetStudent from "./pages/Admin/users/student/getstudent";
import Prof from "./components/sideProfile/prof";
import Post from "./pages/Admin/event/Addpost";
import SinglePost from "./pages/Admin/event/SinglePost";
import PostCard from "./pages/Admin/event/PostCard";
import PostsPage from "./pages/Admin/event/PostsPage";
import { Podcasts } from "@mui/icons-material";
import UploadDelib from "./pages/Admin/deliberation/uploadDelib/UploadDelib";
import TestStudent from "./pages/Admin/users/student/teststudent";
import AddModule from "./pages/Admin/module/AddModule";


function App() {
  return(
    <div className='App'>
      
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path="/ProfileEns" element={<ProfileEns/>}/>
          <Route path="/Settings" element/>
          <Route path="mpasse" element={<Mpasse/>}/>
          <Route path="mpasse1" element={<Mpasse1/>}/>
          <Route path="Etudiant">
            <Route index  element={<StModules/>}></Route>

          </Route>
       
          {/* Admin routes */}
          <Route path="admin" >
           <Route  index element={<Home/>}/>
             <Route path="StudentDB" element={<Etudiant/>}/>
             <Route path="StudentDB/:studentId/edit" element={<EditStudentProfile/>}/>
             <Route path="TeacherDB" element={<Enseignant/>}/>
             <Route path="TeacherDB/:teacherId/edit" element={<EditTeacherProfile/>}/>
             <Route path="TeacherDB/newMan" element={<AjouterEnseignant/>}/>
             <Route path="TeacherDB/newAuto" element={<UploadTeacher/>}/>
             <Route path="StudentDB/newMan" element={<AjouterStudent/>}/>
             <Route path="StudentDB/newAuto" element={<UploadStudent/>}/>
             <Route path="Promotion" element={<Promotion/>}/>
             <Route path="Promotion/SchoolYear" element={<Annee/>}/>
             <Route path="Promotion/SchoolYear/StModule" element={<StModules/>}/>
             <Route path="Promotion/SchoolYear/NdModule" element={<NdModule/>}/>
             <Route path="Events" element={<PostsPage/>}/>
             <Route path="Events/:EventsId" element={<SinglePost/>}/>
             <Route path="Events/newevent" element={<Post/>}/>
             <Route path="TimeTable" element={<Calendar/>}/>
             <Route path='deliberation' element={<UploadDelib/>}/>
             <Route path="Salle" element={<Salle/>}/>
             <Route path='test' element={<Test/>}/>
           
             </Route>
           <Route path='Enseignant'>
             <Route  index element={<Enseignants/>}/>
             <Route path='Document' element={<Doc/>}/>
             <Route path='Evaluation' element={<Evaluation/>}/>
            
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
