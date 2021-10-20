import React from 'react';
import { Badge, Button, Nav } from 'react-bootstrap';
import MenuBar from '../Menubar/MenuBar';

import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header"  >
            <div className=" p-5" >
                <MenuBar></MenuBar>
            </div>
            <div className="p-5 text-white" >
                <h2>Feel Safe With Maternity Care </h2>
                <p>The best care in the Pregnancy Industry   </p>
            </div>
            <div>
                <ul className="list justify-content-center">
                    <ol>Diet Chart</ol>
                    <ol>appoinment form</ol>
                    <ol>procedure page</ol>
                    <ol>patient information</ol>
                    <ol>Doctors Details</ol>
                    <ol className="py-3">

                        <Nav.Link as={NavLink} to="/appoinment" className="items ">
                            <Badge pill bg="danger"><Button variant="danger">

                                Talk to Us
                            </Button>
                            </Badge>    </Nav.Link></ol>
                </ul>
            </div>
        </div >
    );
};

export default Header;