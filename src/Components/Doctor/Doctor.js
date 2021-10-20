import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {

    return (
        <div>
            <div>
                {/* <div> key={doctor.key}</div> */}


                <div class="col  pb-5">
                    <div class="shadow-lg card h-100">

                        <img src={doctor.image} className="card-img-top p-2" alt="..." />
                        <div class="">
                            <h3 class="card-title">{doctor.name}</h3>
                            <h6 class="text-info">{doctor.specialist}</h6>
                            <p class="text-dark">{doctor.desigenation}</p>


                            <div className="py-2">

                                <Link to={`/doctors/${doctor.id}`}>  <Badge pill bg="danger" className="py-2">    <Button className="" variant="danger" >

                                    Details
                                </Button>
                                </Badge></Link></div>
                        </div>
                    </div>
                </div> </div>
        </div>
    );
};

export default Doctor;