import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.FirstName}</th>
            <th>{individualExcelData.LastName}</th>
            <th>{individualExcelData.email}</th>
            <th>{individualExcelData.Genre}</th> 
            <th>{individualExcelData.DateDeNaissance}</th>
            <th>{individualExcelData.Adresse}</th>
            <th>{individualExcelData.Numéro_telephone}</th>
            <th>{individualExcelData.Grade}</th>
            <th>{individualExcelData.Etat_civil}</th>
          
           
        </>
    )
}
