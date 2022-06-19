import   './datatable.css';
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { teacherColumns } from './TeacherData';

const Datatable = ({data}) => {

  const redirect = () => {
    var url = "/ens";
    window.open(url);
  };
  const actionColumn = [{field:'action',headerName:'Action',width:200,
  renderCell:(params)=>{
    return (
      <div className='cellAction'>
        <div className='viewButton' >View</div> 

          <div className='deleteButton' onClick={redirect}>Edit</div>
      
      </div>
    );
  },},
]
 

  return (
    <div className='datatable'>
  
      <DataGrid 

      
       
        rows
        columns={teacherColumns.concat(actionColumn) } 
        
        pageSize={15}
        rowsPerPageOptions={[15,30,50]}
        
        disableSelectionOnClick
        showCellRightBorder={false}
        showColumnRightBorder={false}
        showRowRightBorder={false}
        
        
       
        
        
       
        
      />
      
    </div>
    
    )}


export default Datatable
