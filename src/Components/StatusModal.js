import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function DeleteModal({modalShow, toggleModal, job}) {

  const [status, setStatus] = useState('Not Applied')

  function toggleStatus() {

    toggleModal()

    job.status = status

    fetch(`http://localhost:8001/job-listings/${job.id}`, {
      method: 'PATCH',
      body: JSON.stringify(job),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  }

  return (
    <Modal show={modalShow} onHide={() => toggleModal()} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Edit Status
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>What would you like the new status to be?</h4>
      <Form.Select onChange={(e) => setStatus(e.target.value)} className="my-4" aria-label="Job Status" name="job_status" required>
          <option readOnly>Select Status</option>
          <option value="Not Applied">Not Applied</option>
          <option value="Applied">Applied</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
          <option value="Accepted">Accepted</option>
      </Form.Select>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => toggleStatus(job)} className="btn-primary">Change Status</Button>
      <Button onClick={() => toggleModal()} className="btn-secondary">Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteModal