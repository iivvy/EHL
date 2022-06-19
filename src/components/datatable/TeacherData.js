import React from "react";

export const teacherColumns = [
    { field: "id", headerName: "id", width: 120 },
    
    {
      field: "username",
      
      headerName: "username",
      width: 210,
      
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
  
    
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "Grade",
      headerName: "Grade",
      width: 130,
     
    },
    {
      field: "date_de_naissance",
      headerName: "Date de naissance",
      width: 230,
      hide:true,
    },
    {
      field: "Adresse",
      headerName: "Adresse",
      width: 230,
      hide:true,
    },
    {
      field: "phoneNumber",
      headerName: "À propos",
      width: 230,
      hide:true,
    },
    {
      field: "sexe",
      headerName: "Sexe",
      width: 230,
      hide:true,
    },
    {
        field: "civil_status",
        headerName: "Etat civil",
        width: 230,
        hide:true,
      },
  
 
  ];
  
  