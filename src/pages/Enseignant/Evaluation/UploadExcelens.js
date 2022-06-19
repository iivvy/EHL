import {useState} from 'react'
import {Dataens} from './Dataens'
import * as XLSX from 'xlsx'
import axios from 'axios';
import './uploadens.css'
import HomeEns from '../../Base/HomeEns';
function UploadDelib() {
  
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
    axios.post(``,excelData)
    .then(()=>{
      console.log('success');
    })
        
  }

  
  return (
    <div>
    
    <div className="container">
      

      {/* upload file section */}
      <div className='formS'>
        <form className='form-group1' autoComplete="off"
        onSubmit={handleSubmit}>
          {/* <label><h5 style={{color:'black',fontFamily:"Poppins",fontSize:"18px"}}>Ajouter votre fichier excel ici </h5></label> */}
          <br></br>
          <input type='file' className='form-control' style={{border:"0.3px solid #195e9a",borderRadius:"5px",width:"550px"}}
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:'0px'}}>{excelFileError}</div>}
          <button type='submit' className='btn-success'
          style={{marginTop:'0px' }} onClick={UploadExcel}>Submit</button>
        </form>
      </div>

      {/* <br></br> */}
      {/* <hr></hr> */}
      
      {/* view file section */}
      {/* <h5 style={{color:'black',fontFamily:"Poppins",fontSize:"18px"}}>Consulter votre fichier excel</h5> */}
      <div className='viewer'>
        {excelData===null&&<>No file selected</>}
        {excelData!==null&&(
          <div className='table-responsive'>
            {/* <table style={{width:"1200px"}} className='table'>
              <thead>
                <tr>
                  <th  scope='col'>username</th>
                  <th scope='col'>TD</th>
                  <th scope='col'>exam</th>
                  <th scope='col'>s1</th>
                  <th scope='col'>s2</th>
                  <th scope='col'>moyenne</th>
                         
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData}/>
              </tbody>
            </table>             */}
          </div>
        )}       
      </div>

    </div>
    </div>
  );
}

export default UploadDelib;