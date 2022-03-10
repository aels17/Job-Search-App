import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


function SearchBar() {
  return (
        <Form>
            <Row className="align-items-center justify-content-center my-3">
                <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                    Name
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="Search..." />
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Select aria-label="Job Status" name="job_status" required>
                    <option readOnly>Select Status</option>
                    <option value="Not Applied">Not Applied</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview Scheduled">Interview Scheduled</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Accepted">Accepted</option>
                  </Form.Select>
                </Col>
            </Row>
        </Form>    
  );
}

export default SearchBar;
