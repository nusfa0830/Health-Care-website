import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="footer-container text-white bg-secondary" >
                <div className="footer-header">
                    <h1 className="p-2"  >Get Notification </h1>
                    <input className="p-2  rounded" placeholder="Your Email Address" />
                    <Button variant="success">Email Now </Button>
                </div>
                <div >
                    <div className="row text-white">
                        <div className="col-md-3 my-2"> <h1>About us</h1>
                            <p>
                                Maternity care was finally able to clear her skinying to communicate through frustrating symptoms, and then develop a step-by-step roadmap to find balance again. we 's here to help you get on track!

                                Fertility Awareness Method (FAM) Educator and a certified member of the Australian Natural Therapists Association (ANTA)..</p>


                        </div>
                        <div className="col-md-3 my-2">
                            <h1>Adrress</h1>
                            <p>123 Street, New York, USA</p>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>

                        </div>
                        <div className="col-md-3 my-2">
                            <h1>Information</h1>
                            <p>Health Info</p>
                            <p>Appointment</p>
                            <p>Contact</p>
                            <p>Pregnancy Care</p>
                        </div>
                        <div className="col-md-3 my-2">
                            <h1>Help-Desk </h1>
                            <p> 24 hours Support</p>
                            <p> Road-4, 34-HEMEL, NEW YORK
                                Official: web@*******.com
                            </p>
                            <p> Helpline : 01***810867)</p>
                            <p> (Available : 09:00am to 12:00pm</p>
                        </div>
                    </div>

                </div>
                <div>
                    <h3>Trusted By 1550000 people</h3>
                </div>
                <div className="p-4 pb-5">
                    <h5 >Copyright  &copy; 2021 || Maternity Care</h5></div>
            </div >

        </div >
    );
};

export default Footer;