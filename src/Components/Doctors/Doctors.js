import React, { useEffect, useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MenuBar from '../Menubar/MenuBar';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
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
                                <div>
                                    {/* <div> key={doctor.key}</div> */}


                                    <div class="col  pb-5">
                                        <div class="shadow-lg card h-100">

                                            <img src={doctor.image} className="card-img-top p-2" alt="..." />
                                            <div class="">
                                                <h3 class="card-title">{doctor.name}</h3>
                                                <h6 class="text-info">{doctor.specialist}</h6>
                                                <p class="text-dark">{doctor.desigenation}</p>




                                                <Link to={`/doctors/${doctor.id}`}>  <Badge pill bg="danger" className="py-2">    <Button variant="danger" >

                                                    Details
                                                </Button>
                                                </Badge></Link>
                                            </div>
                                        </div>
                                    </div> </div>)
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