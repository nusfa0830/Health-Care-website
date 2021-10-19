import React from 'react';
import logo from "../../Images/logo3.jpg"
import "./MenuBar.css"
import { NavLink, Link } from "react-router-dom";
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
const MenuBar = () => {
    const { user, handleLogout } = useFirebase();
    return (
        <div>

            <Navbar bg="light" expand="lg" variant="light" fixed="top"  >
                <Container fluid>
                    <Navbar.Brand href="#home">

                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top
                            "
                        />{' '}
                        Maternity care
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex align-items-end justify-content-end nav-item dropdown">
                            <Nav.Link as={NavLink} to="/home" className="items ">
                                <li>Home</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/doctors" className="items">
                                <li>Doctors</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/online-doctors" className="items">
                                <li>Online-Consultant</li>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/pages" className="items">
                                <li>Procedures</li>
                            </Nav.Link>


                            <Nav.Link as={NavLink} to="/appoinment">
                                <Badge pill bg="danger">    <Button variant="danger">

                                    Appointment
                                </Button>
                                </Badge>
                            </Nav.Link>
                            {user.displayName && (
                                <Link to="/">
                                    {user.displayName}
                                    <Button onClick={handleLogout} variant="danger">

                                        SignOut
                                    </Button>
                                </Link>
                            )}

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default MenuBar;