import React from 'react';
import DeleteModal from './DeleteModal'
import SearchBar from './SearchBar'
import JobList from './JobList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



function Home({jobs}) {
  return (
    <Container className="my-5">
        <Row className="my-3">
            <SearchBar />
        </Row>
        <Row className="my-3">
            <JobList jobs={jobs}/>
        </Row> 
    </Container>
  );
}

export default Home;