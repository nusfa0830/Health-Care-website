import React from 'react';
import "./Appointment.css"
import 'animate.css';
import chart from "../../Images/trimster-chart.jpg"
import { Button } from 'react-bootstrap';


const Appoinment = () => {
    return (
        <div id="appoinment" className=" ">
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
                    <label for="floatingTextarea2">Your Message</label>
                </div>
                <Button className="available ">Check availablity</Button>
            </div>
            <div>
                <div className="body-name pt-5 mx-5">
                    <h1>Trimster Chart
                    </h1>  <hr></hr> <p className="text-dark">Consuming healthy foods and low-calorie beverages, particularly water, and the appropriate number of calories may help you and your baby gain the proper amount of weight.</p>
                </div>
                <div>
                    <img
                        alt=""
                        src={chart} />
                </div>
                <div className="container">
                    <div className="row p-2">
                        <div className="col-md-4 p-2 text-primary ">
                            <h1>1st Trimster</h1>
                            <hr />
                            <p>0.4kg - 2.0kg</p>
                        </div>
                        <div className="col-md-4 p-2 text-info ">
                            <h1>2nd Trimster</h1>
                            <hr />
                            <p>2.0kg - 8.0kg</p>
                        </div>
                        <div className="col-md-4 p-2 body-name ">
                            <h1>3rd Trimster</h1>
                            <hr />
                            <p>8.0kg - 13.6kg</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;