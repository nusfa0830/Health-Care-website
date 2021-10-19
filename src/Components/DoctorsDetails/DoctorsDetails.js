import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorsDetails = () => {
    const { doctorId } = useParams();

    const [doctor, setDoctor] = useState({});
    const url = 'https://api.jsonbin.io/b/616eb7c94a82881d6c625431'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctor(data?.[id]))

    }, []);

    return (
        <div>
            <div>
                {doctor.map(d => d.id === doctorId ? <div>
                    <div>
                        {/* <div> key={doctor.key}</div> */}


                        <div class="col pb-5">
                            <div class="shadow-lg card h-100">

                                <img src={d.image} className="card-img-top p-2" alt="..." />
                                <div class="">
                                    <h3 class="card-title">{d.name}</h3>
                                    <h6 class="text-info">{d.specialist}</h6>
                                    <p class="text-dark">{d.desigenation}</p>





                                </div>
                            </div>
                        </div> </div>
                </div> : <div></div>)
                }
            </div>



        </div>



    );
};

export default DoctorsDetails;