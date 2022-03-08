import React from 'react';
import JobCard from './JobCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function JobList() {
  return (
    <div>
        <Row className="d-flex justify-content-end p-2">
            <Col>
                <JobCard />      
            </Col>
            <Col>
            <JobCard />             
            </Col>
            <Col>
            <JobCard />             
            </Col>
            <Col>
            <JobCard />             
            </Col>
        </Row>



    </div>
  );
}

export default JobList;
