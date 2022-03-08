import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



function NavBar() {
  return (
      <header>
            <Navbar bg="light" expand="lg">
                <Container className="d-flex justify-content-end p-2">
                    <Link to="/create-job" ><Button variant="primary">Create a New Job</Button>{' '}</Link>
                </Container>
            </Navbar>
        </header>
  );
}

export default NavBar;
