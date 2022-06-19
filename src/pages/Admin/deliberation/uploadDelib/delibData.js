import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Nom}</th>
            <th>{individualExcelData.Prénom}</th>
            <th>{individualExcelData.id}</th>
            <th>{individualExcelData.s1}</th> 
            <th>{individualExcelData.s2}</th>
            <th>{individualExcelData.moyenne}</th>
           
        </>
    )
}
