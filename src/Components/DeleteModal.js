import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function DeleteModal({modalShow, toggleModal, deleteJob, job}) {

  return (
    <Modal show={modalShow} onHide={() => toggleModal()} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Delete Job
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Are you sure that you want to delete information for?</h4>
      <p>
        Deleting this job here will permanently delete the job from the database. To return to job, click close. Otherwise, clickk delete.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => toggleModal()} className="btn-secondary">Close</Button>
      <Button onClick={() => deleteJob(job)} className="btn-danger">Delete</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteModal