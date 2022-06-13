import React,{useState,useEffect} from "react";
import axios from "axios";

function GetStudent(){
    const[data,setData]=useState([]);
    const getStudent = async =>{
        axios.get("http://localhost:8080/api/Etudiant/ajouteretudiant")
        .then((resp)=>{
            setData(resp.data.data);
            console.log("display data")
            console.log(resp.data.data);
        })
    }
    useEffect(()=>{
        getStudent();

    })

}
export default GetStudent;