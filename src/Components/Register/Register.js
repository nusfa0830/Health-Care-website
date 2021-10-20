import React from 'react';
import { Button, Nav } from 'react-bootstrap';

import { NavLink } from "react-router-dom";
import Footer from '../Footer/Footer';
import MenuBar from '../Menubar/MenuBar';
const Register = () => {
    return (
        <div>
            <div className='py-5'>
                <MenuBar></MenuBar>
            </div>
            <div className="bg--light body-name d-flex justify-content-start p-5">
                <h1>Fix An Appointment</h1>
            </div>
            <form>
                <div className="h-50 w-50 px-5">
                    <div className="form-floating row mb-3">
                        <input type="text" class="form-control form-control-sm col-sm-12" id="floatingInput" placeholder="Your Name" />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3 row">
                        <input type="email" className="form-control form-control-sm col-sm-12" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput colFormLabelSm " className="py-1">Email address</label>
                    </div>
                    <div className="form-floating row mb-3">
                        <input type="Number" className="form-control form-control-sm col-sm-12" id="floatingPassword" placeholder="Phone" />
                        <label for="floatingPassword">Phone</label>
                    </div>
                    <div class="form-floating row mb-3">
                        <select className="form-select form-control-sm col-sm-12" id="floatingSelect" aria-label="Floating label select example">
                            <option selected>Type of Services</option>
                            <option value="1">Monthly Check Up</option>
                            <option value="2">Consalte Doctor</option>
                        </select>
                    </div>
                    <div class="form-floating  row mb-3">
                        <textarea className="form-control form-control-sm col-auto" placeholder="Leave a comment here" id="floatingTextarea2"
                        ></textarea>
                        <label for="floatingTextarea2 Email1msg " className="py-1 fs-6 ">Your Problem</label>

                    </div>

                    <div className="py-3" >
                        <Nav.Link as={NavLink} to="/login" className="items">
                            <p> Already Have Appoinment ? </p>
                        </Nav.Link>
                    </div>
                    <div className="pb-5">
                        <Nav.Link as={NavLink} to="/login" className="items ">
                            <Button className="available">Check availablity</Button>
                        </Nav.Link></div>
                </div>
            </form>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Register;