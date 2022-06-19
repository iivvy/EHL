import React,{useState,useEffect, useCallback} from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import './tablest.css'
import Prof from "../../../../components/sideProfile/prof";
import { useNavigate } from "react-router-dom";

function GetStudent(){
  const [selectedRow, setSelectedRow] = useState();
 
  const navigate = useNavigate();
  const editStudentonClick =useCallback((studentId)=>()=>{
    navigate(`/admin/StudentDB/${studentId}/edit`)

  })
  const [Id,setId] = useState('')
  
  const getinfo =()=>{
      axios.post(`http://localhost:8080/info_enseignant`,{Id})
      .then((resp)=>{
          console.log("here data",resp.data);
      })
      
  }
  const handleview =(row)=>{
    setSelectedRow(row);
    

  }
  
  
   
   
    const actionColumn = [{field:'action',headerName:'Action',width:150,
    renderCell:({row})=>{
      return (
        
        <div className='cellAction'>
          <div>
            <button className='viewButton' onClick={console.log(row.id)}>View</button>
            </div> 
  
            <div  > <button className='deleteButton' >Modifier</button></div>
        
        </div>
      );
    },},
  ]
    const columns =[
   
        {field: "username",headerName: "Username",width: 150, renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt="avatar" />
              {params.row.username}
            </div>
          );
        },
        
      },
        {field:"id", headerName:"ID",width:100,hide:true,
},
        {field: "email",headerName: "email",width: 180,},
        {field: "GroupeId",headerName: "Groupe",width: 80,},
        {field: "date_de_naissance",headerName: "date_de_naissance",width: 200,hide:true},
        {field: "Adresse",headerName: "Adresse",width: 200,hide:true},
        {field: "phoneNumber",headerName: "phoneNumber",width: 200,hide:true},
        {field: "sexe",headerName: "Sexe",width: 200,hide:true},
        {field: "Promotion",headerName: "Promotion",width: 80},
        {field: "registration_Number",headerName: "Numéro inscription",width: 140},
        {field: "FirstName",headerName: "FirstName",width: 200,hide:true},
      ];
    const[data,setData]=useState([]);
    const getStudent = async () =>{
        await axios.get("http://localhost:8080/list_etudiant")
        .then((resp)=>{
            setData(resp.data);
            
        })
    }
    useEffect(()=>{
        getStudent();

    },[]);
    console.log("student list", data)
    const rows = data.map((row)=>({
        id:row.user.id,
        username:row.user.username,
        email:row.user.email,
        Promotion:row.Promotion,
        date_de_naissance:row.user.date_de_naissance,
        Adresse:row.user.Adresse,
        phoneNumber:row.user.phoneNumber,
        sexe:row.user.sexe,
        GroupeId:row.GroupeId,
        registration_Number:row.registration_Number

    }))
    return (
        <div className='datatable'>
         
          <DataGrid 
          
            columns={columns.concat(actionColumn) } 
            rows={rows}
          
           
            pageSize={15}
            rowsPerPageOptions={[15,30,50]}
            
            disableSelectionOnClick
            showCellRightBorder={false}
            showColumnRightBorder={false}
            showRowRightBorder={false}
            
            
           
            
          /> 
        </div>
      )

}
export default GetStudent;