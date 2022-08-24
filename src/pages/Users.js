import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './users.css'
const Users = ({user}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
        <Card.Text>
         {user.description}
        </Card.Text>
     <Link to={`/profile/${user.id}`}><Button>more info</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Users