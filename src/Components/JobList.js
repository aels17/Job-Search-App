import React from 'react';
import JobCard from './JobCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function JobList({jobs}) {

  function mapJobs() {

    return jobs.map(job => <Col key={job.id} className="py-3 col-md-3"><JobCard  job={job} /></Col>)

  }

  return (
    <div>
        <Row className="d-flex justify-content-start">
          {mapJobs()}
        </Row>
    </div>
  );
}

export default JobList;
