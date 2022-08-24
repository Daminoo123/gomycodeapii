import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Users from '../pages/Users'

const list = () => {
  const [userss,setUsers]=useState([])
  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      {userss.map(el=>(<Users user={el} key={el.id}/>))}
    </div>
  )
}
export default list