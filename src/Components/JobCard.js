import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function JobCard({job}) {

  const {id, company, date_applied, job_title, short_description, status } = job


  return (
    <Card className="m-auto  h-100" >
    <Card.Header  className={status.toLowerCase().replace(' ', '-')} style={{fontWeight: "700", fontSize: "14px", paddingLeft: "1.5rem"}}>{status}</Card.Header>
    <Card.Body className="p-4">
      <Card.Title>{company}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted pb-2">{job_title}</Card.Subtitle>
      <Card.Text>{short_description}</Card.Text>
      <Link to={'/' + id} ><Button>Details</Button></Link>
    </Card.Body>
  </Card>
  );
}

export default JobCard;