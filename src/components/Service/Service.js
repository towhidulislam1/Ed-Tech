import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';

const Service = () => {
    const [Service, setService] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data => setService(data));
    }, [])
    return (
        <div  >
            <h2><span>Our</span> Services : {Service.length}</h2>
            <hr/>
            <div class="row row-cols-1 row-cols-md-3 mb-5 g-4">
                {
                    Service.map(services => <Services services={services}>
                        
                        
                    </Services>)
                }
            </div>
        </div>
    );
};

export default Service;