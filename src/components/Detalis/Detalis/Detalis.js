import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detalis = () => {
    const {serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect (() => {
        
        fetch(`./services.json/${serviceId}`)
        .then(res => res.json())
        .then(data =>setService(data));
    },[])
    return (
        <div>
            <h2> Service  detalis : {serviceId}</h2>
            <div>{service.img}</div>
            
        </div>
    );
};

export default Detalis;