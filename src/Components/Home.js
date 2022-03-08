import React from 'react';
import SearchBar from './SearchBar'
import JobList from './JobList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



function Home() {
  return (
    <Container>
        <Row>
            <SearchBar />
        </Row>
        <Row>
            <JobList />
        </Row>  
    </Container>
  );
}

export default Home;