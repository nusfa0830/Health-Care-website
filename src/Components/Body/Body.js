import React from 'react';
import "./Body.css";
import Image1 from "../../Images/happy-mother-with-cute-newborn-baby.jpg"
import Image2 from "../../Images/background-images.jfif"
import Image3 from "../../Images/tense-pregnancyjpg.jpg"
import Image4 from "../../Images/gynocologistjfif.jfif"
import Image5 from "../../Images/ultrasoundjfif.jfif"
import Image6 from "../../Images/neonatal-icu.jpg"
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Appoinment from '../Appointment/Appoinment';

const Body = () => {
    return (
        <div>
            <div className="body-name pt-5 mx-5">
                <h1>Things to Know
                </h1>  <hr></hr> <p className="text-dark">Consuming healthy foods and low-calorie beverages, particularly water, and the appropriate number of calories may help you and your baby gain the proper amount of weight.</p>
            </div>
            <div>
                <div className="container">
                    <div className="row bg-gradient rounded p-2">
                        <div className="col-md-4 p-2 ">
                            <img className="images"
                                alt=""
                                src={Image1}

                            />
                            <h4 className="p-2 text-info">Infant Activities</h4>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <img className="images border border-secondary"
                                alt=""
                                src={Image2}

                            />
                            <h4 className="p-2 text-info">Maternal Care</h4>
                        </div>
                        <div className="col-md-4 p-2  ">
                            <img className="images border border-danger"
                                alt=""
                                src={Image3}

                            />
                            <h4 className="p-2 text-info">High Risk Pregnancy Care</h4>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <img className="images border border-primary"
                                alt=""
                                src={Image4}

                            />
                            <h4 className="p-2 text-info">GYneocological  Service</h4>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <img className="images border border-warning"
                                alt=""
                                src={Image5}

                            />
                            <h4 className="p-2 text-info">MR Gueided UltraSound</h4>
                        </div>
                        <div className="col-md-4 p-2 ">
                            <img className="images border border-info"
                                alt=""
                                src={Image6}

                            />
                            <h4 className="p-2 text-info ">Neonatal ICU</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* added apoinment component */}
            <Appoinment></Appoinment>
        </div>


    );
};

export default Body;