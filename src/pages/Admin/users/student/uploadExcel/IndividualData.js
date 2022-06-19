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
            <th>{individualExcelData.Numéro_inscription}</th>
            <th>{individualExcelData.Annee_scolaire}</th>
            <th>{individualExcelData.Promotion}</th>
            <th>{individualExcelData.Groupe}</th>
           
        </>
    )
}
