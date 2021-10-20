import React, { useEffect, useState } from 'react';
import { Badge, Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';


import MenuBar from '../Menubar/MenuBar';


const DoctorsDetails = () => {

    const { doctorId } = useParams();
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    // using fakedata by hosting it
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/616eb7c94a82881d6c625431')
            .then(res => res.json())
            .then(data => setItems(data))

    }, []);
    // use map for set single data
    useEffect(() => {
        items.map(item => {
            if (item.id === parseInt(doctorId)) {
                console.log(item)
                setItem(item);
            }
        })
    }, [items])


    return (
        <div>
            <div className="p-5">
                <MenuBar></MenuBar>
            </div>
            <div className="container ">

                <div className="row row-cols-1 row-cols-md-1 g-4 p-2">
                    <div class="col  pb-5">
                        <div class="shadow-lg card h-100">
                            <img src={item.image}
                                className="card-img-top p-2" alt="..." />

                            <div>
                                <h3 class="card-title"> Name : {item.name}</h3>
                                <h6 class="text-info">
                                    Specialist :     {item.specialist}</h6>
                                <p class="text-dark">{item.desigenation}</p>
                                <p class="text-dark">{item.mentor}</p>
                                <p class="text-dark"> visiting-time :{item.time}</p>
                                <p class="text-dark">{item.description}</p>
                                <div>          <Nav.Link as={NavLink} to="/appoinment">
                                    <Badge pill bg="danger">    <Button variant="danger">

                                        Appointment
                                    </Button>
                                    </Badge>
                                </Nav.Link>  </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>









        </div>
    );
};

export default DoctorsDetails;

