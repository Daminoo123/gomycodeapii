import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
const User = () => {
    const [userss,setUsers]=useState({})
    const {id}= useParams()
    useEffect(()=>{
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res=>setUsers(res.data))
      .catch(err=>console.log(err))})
  return (
    <div>
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{userss.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{userss.username}</Card.Subtitle>
        <Card.Text>
         {userss.description}
        </Card.Text>
        <Card.Text>
         {userss.email}
        </Card.Text>
        <Card.Text>
         {userss.phone}
        </Card.Text>
     <Link to='/'><Button>back home</Button></Link>
      </Card.Body>
    </Card>

    </div>
  )
}

export default User