import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <NavLink style={{color: "white", textDecorationLine:"none"}} as Link to="/about">about</NavLink>
                <NavLink className="ms-3" style={{color: "white", textDecorationLine:"none"}} as Link to="/home">Home</NavLink>
                <NavLink className="ms-3" style={{color: "white", textDecorationLine:"none"}} as Link to="/explore">Explore</NavLink>
                <NavLink className="ms-3" style={{color: "white", textDecorationLine:"none"}} as Link to="/dashboard">Dashboard</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;