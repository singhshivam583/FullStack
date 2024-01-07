import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


export default function Logout() {

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/user/api/logout',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then((res) => {
            navigate('/login')
            // window.location.href="/login";
            // history.push('/login')
            if(res.status !== 201){
                throw new Error("Error while fetching logout",res.error)
            }
        }).catch((err) => {
            console.log(err)
        });
        
    })

  return (
    <div>Logout</div>
  )
}

