import React from 'react';
import JobCard from './JobCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function JobList({jobs, toggleDeleteModal, deleteModalShow, deleteJob, searchTerm, selectTerm}) {

  function mapJobs() {

    return (
      jobs.map(job => {
        return <Col key={job.id} className="py-3 col-md-3"><JobCard  job={job} toggleDeleteModal={toggleDeleteModal} deleteModalShow={deleteModalShow} deleteJob={deleteJob}/></Col>
      })
      .filter(job => {
        console.log(job)
        const name = job.props.children.props.job.company.toLowerCase()
        if (name.includes(searchTerm.toLowerCase()) || searchTerm === '') {
          return job
        }
      })
      .filter(job => {
        const status = job.props.children.props.job.status
        if (status === selectTerm || selectTerm === 'All') {
          return job
        }
      })
    )

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
