import { RowingSharp, SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { teacherColumns } from '../../../../components/datatable/TeacherData';
import './table.css'

const GetTeacher = () => {
  const actionColumn = [{field:'action',headerName:'Action',width:130,
  renderCell:(params)=>{
    return (
      <div className='cellAction'>
        <div className='viewButton' >View</div> 

          <div className='deleteButton' >Edit</div>
      
      </div>
    );
  },},
]
  const columns =[
   
    {field: "username",headerName: "username",width: 230, renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' alt="avatar" />
          {params.row.username}
        </div>
      );
    },
    
  },
   {field:"id", headerName:"ID",width:100},
    {field: "email",headerName: "email",width: 200,},
    {field: "Grade",headerName: "Grade",width: 130,},
    {field: "date_de_naissance",headerName: "date_de_naissance",width: 200,hide:true},
    {field: "Adresse",headerName: "Adresse",width: 200,hide:true},
    {field: "phoneNumber",headerName: "phoneNumber",width: 200,hide:true},
    {field: "sexe",headerName: "Sexe",width: 200,hide:true},
  ];
    const [TableData,setTableData] = useState([]);
    const getTeacherdata = async () => {
        await axios.get(`http://localhost:8080/list_enseignant`)
     
        .then((response) => {
            setTableData(response.data);

        });
    };
    useEffect(() => {
        getTeacherdata();
    }, []);
    console.log("here's the list",TableData);
   
    const rows = TableData.map((row) => ({
      id:row.user.id,
      username:row.user.username,
      email:row.user.email,
      Grade:row.Grade,
      date_de_naissance:row.user.date_de_naissance,
      Adresse:row.user.Adresse,
      phoneNumber:row.user.phoneNumber,
      sexe:row.user.sexe,
      civil_status:row.civil_status,
      



    }
    
    ))
    console.log('result',rows)
   
    
    
    
    
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

export default GetTeacher