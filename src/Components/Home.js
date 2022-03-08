import React from 'react';
import SearchBar from './SearchBar'
import JobList from './JobList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



function Home() {
  return (
    <Container className="my-5">
        <Row className="my-3">
            <SearchBar />
        </Row>
        <Row className="my-3">
            <JobList/>
        </Row>  
    </Container>
  );
}

export default Home;