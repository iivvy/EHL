import {useState} from 'react'
import {Data} from './Data'
import * as XLSX from 'xlsx'
import axios from 'axios';
import './uploading.css'
import Home from '../../../../Base/Home';
function UploadStudent() {
  
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.ms-excel'];
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('plz select your file');
    }
  }

  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    }
    else{
      setExcelData(null);
    }
  }
  const UploadExcel =()=>{
    axios.post(`http://localhost:8080/api/Etudiant/ajouteretudautomatique`,excelData)
    .then(()=>{
      alert("success"); 
  });
        
  }

  
  return (
    <div>
      <Home/>
    <div className="container">
      

      {/* upload file section */}
      <div className='formS'>
        <form className='form-group1' autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h5 style={{color:'black',fontFamily:"Poppins",fontSize:"18px"}}>Ajouter votre fichier excel ici </h5></label>
          <br></br>
          <button type='submit' className='btn-success'
          style={{cursor:"pointer" }} onClick={UploadExcel}>Submit</button>
          <div className='input'><input type='file' className='form-control' style={{border:"0.3px solid #195e9a",borderRadius:"5px",width:"850px"}}
          onChange={handleFile} required ></input>  </div>                
          {excelFileError&&<div className='text-danger'
          style={{marginTop:'0px'}}>{excelFileError}</div>}
        
        </form>
      </div>

      {/* <br></br> */}
      {/* <hr></hr> */}
      
      {/* view file section */}
      <h5 style={{color:'black',fontFamily:"Poppins",fontSize:"18px"}}>Consulter votre fichier excel</h5>
      <div className='viewer'>
        {excelData===null&&<>No file selected</>}
        {excelData!==null&&(
          <div className='table-responsive'>
            <table style={{marginLeft:"00px"}} className='table'>
              <thead>
                <tr>
                  <th  scope='col'>FirstName</th>
                  <th scope='col'>LastName</th>
                  <th scope='col'>email</th>
                  <th style={{width:"80px"}}  scope='col'>Genre</th>
                  <th scope='col'>DateDeNaissance</th>
                  <th scope='col'>Adresse</th>
                  <th scope='col'>Numéro telephone</th>
                  <th scope='col'>Numéro_inscription</th>
                  <th scope='col'>Année universitaire</th>
                  <th style={{width:"60px"}} scope='col'>Promo</th>
                  <th style={{width:"60px"}} scope='col'>Groupe</th>
                         
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData}/>
              </tbody>
            </table>            
          </div>
        )}       
      </div>

    </div>
    </div>
  );
}

export default UploadStudent;