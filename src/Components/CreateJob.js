import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'




function CreateJob({createJob}) {


  //Get Today's Date and auto fill in date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;



  return (
    <Container className="my-5">
        <Row className="my-3">
          <h1>Create a New Job</h1>
        </Row>
        <Row className="my-3">
          <Form onSubmit={(e) => createJob(e)}>
          <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control name="company" type="text" placeholder="Enter company" required  />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control name="job_title" type="text" placeholder="Enter Job Title" required />
              </Form.Group>

            </Row>
            <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridPOC">
                  <Form.Label>Person of Contact</Form.Label>
                  <Form.Control name="poc" type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control name="location" type="text" placeholder="Enter Location" />
                </Form.Group>

              </Row>
            <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Date</Form.Label>
                  <Form.Control type="date" name="date_applied" defaultValue={today}  />
                </Form.Group>
              
                <Form.Group as={Col} controlId="formGridJobStatus">
                <Form.Label>Job Status</Form.Label>
                  <Form.Select aria-label="Job Status" name="job_status" required>
                    <option readOnly>Select Status</option>
                    <option value="Not Applied">Not Applied</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview Scheduled">Interview Scheduled</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Accepted">Accepted</option>
                  </Form.Select>
                </Form.Group>

              </Row>

              <Row className="mb-3"> 
                 <Form.Group as={Col} controlId="formGridWebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control name="website" type="url" placeholder="www.example.com"  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group  controlId="shortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control name="short_description"  as="textarea" rows={3} required />
                  </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group controlId="jobNotes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control name="notes" as="textarea" rows={3} />
                  </Form.Group>
              </Row>

              <Row className="mb-3">
                  <Button variant="primary" type="submit">Submit</Button>
              </Row>

          </Form>            
        </Row>
    </Container>
  );
}

export default CreateJob;
