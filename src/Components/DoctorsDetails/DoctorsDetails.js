import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorsDetails = () => {
    const { doctorId } = useParams();

    const [doctor, setDoctor] = useState([]);
    const url = `/data.JSON`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctor(data))

    }, []);

    return (
        <div>

        </div>
    );
};

export default DoctorsDetails;