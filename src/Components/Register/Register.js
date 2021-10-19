import React from 'react';
import { Button, Nav } from 'react-bootstrap';

import { NavLink } from "react-router-dom";
const Register = () => {
    return (
        <div>
            <div className="bg--light body-name d-flex justify-content-start p-5">
                <h1>Fix An Appointment</h1>
            </div>
            <div className="h-50 w-50 px-5">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Name" />
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="Number" class="form-control" id="floatingPassword" placeholder="Phone" />
                    <label for="floatingPassword">Phone</label>
                </div>
                <div class="form-floating mb-3">
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Type of Services</option>
                        <option value="1">Monthly Check Up</option>
                        <option value="2">Consalte Doctor</option>
                    </select>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                    ></textarea>
                    <label for="floatingTextarea2">Write down Your Problems and available Time here</label>

                </div>

                <div>
                    <Nav.Link as={NavLink} to="/login" className="items">
                        <li> Already Have Appoinment ? Click</li>
                    </Nav.Link>
                </div>
                <Nav.Link as={NavLink} to="/login" className="items">
                    <Button className="available ">Check availablity</Button>
                </Nav.Link>
            </div>

        </div>
    );
};

export default Register;