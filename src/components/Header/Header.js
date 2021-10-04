import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className="fs-4" to="/home">GoEdu.com</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Service</NavLink>
                        <NavLink to="/success">Success Story</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;