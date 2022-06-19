import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.username}</th>
            <th>{individualExcelData.TD}</th>
            <th>{individualExcelData.exam1}</th> 
            <th>{individualExcelData.exam2}</th>
            <th>{individualExcelData.moyenne}</th>
           
        </>
    )
}
