import React from 'react';
import { Link } from "react-router-dom";
import DeleteModal from './DeleteModal'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'



function JobCard({job, toggleDeleteModal, deleteModalShow, deleteJob}) {

  const {id, company, job_title, short_description, status } = job


  return (
    <Card className="m-auto  h-100 scale-up-center" >
    <Card.Header  className={status.toLowerCase().replace(' ', '-')} style={{fontWeight: "700", fontSize: "14px", paddingLeft: "1.5rem"}}>{status}</Card.Header>
    <Card.Body className="p-4">
      <Card.Title>{company}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted pb-2">{job_title}</Card.Subtitle>
      <Card.Text>{short_description}</Card.Text>
      <Link to={'/' + id} ><Button>Details</Button></Link>
      {/* <Button onClick={() => toggleDeleteModal(job)} className="delete-btn btn-link">Delete</Button> */}
    </Card.Body>
    <DeleteModal modalShow={deleteModalShow} toggleModal={toggleDeleteModal} deleteJob={deleteJob} job={job}/>
  </Card>
  );
}

export default JobCard;