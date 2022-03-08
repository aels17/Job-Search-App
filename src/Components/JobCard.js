import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function JobCard({job}) {

  const {company, date_applied, job_title, short_description, status } = job



  return (
    <Card style={{ width: '18rem' }} className="m-auto" >
    <Card.Body>
      <Card.Title>{company}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted pb-2">{job_title}</Card.Subtitle>
      <Card.Text><strong>Status:</strong>  {status}</Card.Text>
      <Card.Text>{short_description}</Card.Text>
      <Button>Details</Button>
    </Card.Body>
  </Card>
  );
}

export default JobCard;