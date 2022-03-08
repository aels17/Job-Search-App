import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



function NavBar() {
  return (
      <header>
            <Navbar bg="light" expand="lg">
                <Container className="NavContainer d-flex justify-content-end p-2">
                    <Button variant="primary">Create a New Job</Button>{' '}
                </Container>
            </Navbar>
        </header>
  );
}

export default NavBar;
