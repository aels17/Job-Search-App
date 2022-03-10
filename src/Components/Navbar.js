import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



function NavBar() {

    const location = useLocation()
    let rowReverse = ""

    //Add Go Home Button if not on the homepage
    function addBackButton() {
        if (location.pathname !== '/') {

            return <Link to="/" ><Button variant="secondary"> &larr; Back Home</Button>{' '}</Link>
        }
    }


  return (
      <header>
            <Navbar bg="light" expand="lg">
                <Container className={"d-flex justify-content-space-between p-2 flex-row-reverse"}>
                    <Link to="/create-job" ><Button variant="primary">Create a New Job</Button>{' '}</Link>
                    {addBackButton()}
                </Container>
            </Navbar>
        </header>
  );
}

export default NavBar;
