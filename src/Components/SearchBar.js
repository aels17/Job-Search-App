import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function SearchBar({searchTerm, setSearchTerm, setSelectTerm}) {

  return (
        <Form>
            <Row className="align-items-center justify-content-center my-3">
                <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                    Name
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Select aria-label="Job Status" name="job_status" onChange={(e) => setSelectTerm(e.target.value)}>
                    <option readOnly value='All'>Select Status</option>
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
