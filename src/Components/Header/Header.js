import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import NavBar from '../Navbar/NavBar';
import "./Header.css";

const Header = () => {
    return (
        <div className="header"  >
            <div className=" p-5" >
                <NavBar></NavBar>
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
                        <Badge pill bg="danger"><Button variant="danger">

                            Talk to Us
                        </Button>
                        </Badge></ol>
                </ul>
            </div>
        </div >
    );
};

export default Header;