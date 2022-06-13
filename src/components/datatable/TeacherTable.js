import   './datatable.css';
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';
import { useNavigate } from 'react-router-dom';
import AdminService from '../../services/adminService';
import Modal from "@mui/material/Modal";
import {  useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useCallback } from 'react';
import { useEffect } from 'react';

const TeacherTable = () => {
  const [selectionModel, setSelectionModel] = useState([]);
  const [Teachers,setTeachers]= React.useState([]);
  const [importModalOpened, setImportModalOpened] = useState(false);
	const [deleteModalOpened, setDeleteModalOpened] = useState(false);
  const [clickedTeacher, setClickedTeacher] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetchTeachers();
  }, []);
  const fetchTeachers = () => {
    AdminService.getTeachers()
    .then((response) => {
      setTeachers(response.data);

    }).catch((error) => {
      console.log(error);
    });
  }
  const deleteTeacher = (teacherId) => {
    AdminService.deleteUser(teacherId)
    .then((response) => {
      console.log('delete teacher', response.data);
    }).catch((error) => {console.log(error)});
  }
  const deleteTeacherOnClick = useCallback((selectedTeacherId) => () => {
		setClickedTeacher(selectedTeacherId);
		setDeleteModalOpened(true);
	});

	const importOnClick = () => {
		setImportModalOpened(true);
	};

	const deleteOnClick = () => {
		setDeleteModalOpened(true);
	};
  const confirmDeleteOnClick = () => {
		setDeleteModalOpened(false);
		if (selectionModel.length > 1) {
			// Ids of teachers to delete are in selectionModel
			for (const teacherId of selectionModel) {
				deleteTeacher(teacherId);
				fetchTeachers();
			}
		} else {
			deleteTeacher(clickedTeacher);
			setTimeout(() => {
				setTeachers(Teachers.filter((teacher) => teacher.id !== clickedTeacher));
			});
		}
	};
  const editTeacherOnClick = useCallback((teacherId) => () => {
		navigate(`/admin/TeacherDB/${teacherId}/edit`);
	});


  const redirect = () => {
    var url = "/ens";
    window.open(url);
  };
  const actionColumn = [{field:'action',headerName:'Action',width:200,
  renderCell:(params)=>{
    return (
      <div className='cellAction'>
        <div className='viewButton' onClick={editTeacherOnClick(params.id)} >View</div> 

          <div className='deleteButton' onClick={deleteTeacherOnClick(params.id)}>Edit</div>
      
      </div>
    );
  },},
]
 

  return (
    <div className='datatable'>
  
      <DataGrid 

      
       
        rows={Teachers}
        columns={userColumns.concat(actionColumn) } 
        
        pageSize={15}
        rowsPerPageOptions={[15,30,50]}
        
        disableSelectionOnClick
        showCellRightBorder={false}
        showColumnRightBorder={false}
        showRowRightBorder={false}
        initialState={{
          sorting: {
            sortModel: [{ field: "id", sort: "asc" }],
          },
        }}
        
       
        
        
       
        
      />
      	<Modal
						open={deleteModalOpened}
						onClose={() => {
							setDeleteModalOpened(false);
						}}>
						<div className="modal-container">
							<Stack height="100%">
								<Typography
									variant="h4"
									sx={{ fontWeight: "900", textAlign: "center", marginBottom: "4rem" }}>
									Delete Teacher
								</Typography>
								<Typography
									variant="subtitle1"
									sx={{ fontSize: "1.2rem", textAlign: "center" }}>
									{selectionModel.length > 1
										? `Are you sure you want to delete the ${selectionModel.length} selected teachers?`
										: "Are you sure you want to delete the selected teacher?"}
								</Typography>
								<Stack direction="row" justifyContent="center" spacing={2} marginTop={5}>
									<Button variant="contained" onClick={confirmDeleteOnClick}>
										Confirm
									</Button>
									<Button
										variant="contained"
										color="error"
										onClick={() => {
											setDeleteModalOpened(false);
										}}>
										Cancel
									</Button>
								</Stack>
							</Stack>
						</div>
					</Modal>
      
    </div>
    
    )}


export default TeacherTable
