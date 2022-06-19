import React from 'react'
import { IndividualData } from './indvdata'

export const Data = ({excelData}) => {
    return excelData.map((individualExcelData)=>(
        <tr key={individualExcelData.FirstName}>
            <IndividualData individualExcelData={individualExcelData}/>
        </tr>        
    ))
}
