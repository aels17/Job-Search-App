import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function DeleteModal({modalShow, toggleModal, deleteJob, job}) {

  return (
    <Modal show={modalShow} onHide={() => toggleModal()} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Edit Status
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>What would you like the new status to be?</h4>
      <p>
        Deleting this job here will permanently delete the job from the database. To return to job, click close. Otherwise, clickk delete.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button  className="btn-primary">Change Status</Button>
      <Button onClick={() => toggleModal()} className="btn-secondary">Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteModal