import React, {useState} from 'react';
import SearchBar from './SearchBar'
import JobList from './JobList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



function Home({jobs, toggleDeleteModal, deleteModalShow, deleteJob}) {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectTerm, setSelectTerm] = useState('All')


  return (
    <Container className="my-5">
        <Row className="my-3">
            <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} setSelectTerm={setSelectTerm}/>
        </Row>
        <Row className="my-3">
            <JobList jobs={jobs} toggleDeleteModal={toggleDeleteModal} deleteModalShow={deleteModalShow} deleteJob={deleteJob} searchTerm={searchTerm} selectTerm={selectTerm}/>
        </Row> 
    </Container>
  );
}

export default Home;