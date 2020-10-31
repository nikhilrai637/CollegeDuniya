import React from 'react'
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import College1  from './college_01.jpg'
import College2   from './college_02.jpg'
function card({college,index}) {
    return (
        <div>
 <Card style={{ width: '18rem' }}>
      
  <Card.Img variant="top" src={College1} />
  <Card.Body>
    <Card.Title>{college.college_name}</Card.Title>
    <Card.Text>
    {college.ranking}
    </Card.Text>
    <Button variant="primary">Visit College</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default card
