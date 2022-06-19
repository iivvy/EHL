import axios from 'axios'
import React, { useState } from 'react'

const TestStudent = () => {
    const [Id,setId] = useState('')
  
    const getinfo =()=>{
        axios.post(`http://localhost:8080/info_enseignant`,{Id})
        .then((resp)=>{
            console.log(resp.data);
        })
        
    }
  return (
    <div>
        <input onChange={(event)=>{
            setId(event.target.value);
        }}></input>
        <button onClick={getinfo}>submit</button>
    </div>
  )
}

export default TestStudent
