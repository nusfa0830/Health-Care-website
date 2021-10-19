import React from 'react';
import logo from "../../Images/logo3.jpg"
import "./MenuBar.css"
import { Link } from 'react-router-dom';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
const MenuBar = () => {
    const { user, handleLogout } = useFirebase();
    return (
        <div>

            <Navbar bg="light" variant="light" fixed="top" >
                <Container>
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

                    <Nav className="d-flex align-items-end justify-content-end">
                        <Link to="/home" className="items">
                            <li>Home</li>
                        </Link>
                        <Link to="/doctors" className="items">
                            <li>Doctors</li>
                        </Link>
                        <Link to="/doctors" className="items">
                            <li>Online-Consult</li>
                        </Link>
                        <Link to="/pages" className="items">
                            <li>Procedures</li>
                        </Link>


                        <Link to="/login">
                            <Badge pill bg="danger">    <Button variant="danger">

                                Appointment
                            </Button>
                            </Badge>
                        </Link>
                        {user.displayName && (
                            <Link to="/">
                                {user.displayName}
                                <Button onClick={handleLogout} variant="danger">

                                    SignOut
                                </Button>
                            </Link>
                        )}

                    </Nav>




                </Container>
            </Navbar>

        </div >
    );
};

export default MenuBar;