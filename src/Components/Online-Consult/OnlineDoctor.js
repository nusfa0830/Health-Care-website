import React from 'react';

import img from "../../Images/gynocologistjfif.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faStethoscope, faSyringe, faUserMd } from '@fortawesome/free-solid-svg-icons';
import MenuBar from '../Menubar/MenuBar';
import Footer from '../Footer/Footer';
import { Button, Nav } from 'react-bootstrap';

import { NavLink } from "react-router-dom";






const OnlineDoctor = () => {
    return (
        <div>
            <div className=" pb-5">
                <MenuBar></MenuBar>
            </div>

            <div>
                <div className="container pt-5">
                    <div className="row bg-gradient rounded p-2">
                        <div className="col-md-3 p-2 ">
                            <FontAwesomeIcon className="h-50 w-50 text-info" icon={faAmbulance} />
                            <h4 className="p-2 text-dark">Emergency Ambulance</h4>
                        </div>
                        <div className="col-md-3 p-2 ">
                            <FontAwesomeIcon className="h-50 w-50 text-info" icon={faSyringe} />
                            <h4 className="p-2 text-dark">Vaccination</h4>
                        </div>
                        <div className="col-md-3 p-2 ">
                            <FontAwesomeIcon className="h-50 w-50 text-info" icon={faUserMd} />
                            <h4 className="p-2 text-dark">Online Doctor</h4>
                        </div>
                        <div className="col-md-3 p-2 ">
                            <FontAwesomeIcon className="h-50 w-50 text-info" icon={faStethoscope} />
                            <h4 className="p-2 text-dark">Surgery</h4>
                        </div>

                    </div>


                </div>
                <div className="container ">

                    <div className="row row-cols-1 row-cols-md-2 g-4 p-2">

                        <div class="col  pb-5">
                            <div class="">
                                <h1> Our team of medical professionals is here to help you</h1>
                                <p>Helpful services · Meeting People · Activities · Volunteering · Befriending services · Safety online · Child safety online  · Adults and older people.</p>
                            </div>

                        </div>
                        <div class="col  pb-5">
                            <img src={img} alt="" />
                        </div>



                    </div>
                </div>
                <div>
                    <h1>Take Online-Doctors Service </h1>

                    <div className="py-3" >
                        <Nav.Link as={NavLink} to="/doctors" className="items">
                            <Button variant="danger"> Click here </Button>
                        </Nav.Link>

                    </div>
                </div>
                <div>
                    <Footer>
                    </Footer></div>
            </div>
        </div>
    );
};

export default OnlineDoctor;