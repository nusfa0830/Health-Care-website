import React, { useEffect, useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import MenuBar from '../Menubar/MenuBar';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, []);

    return (
        <div>
            <div className="p-5">
                <MenuBar></MenuBar>
            </div>
            <div>
                <div className="container ">

                    <div className="row row-cols-1 row-cols-md-2 g-4 p-2">

                        {
                            doctors.map(doctor =>

                                <Doctor key={doctor.id} doctor={doctor}></Doctor>
                            )
                        }

                    </div>



                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div >



    );
};

export default Doctors;