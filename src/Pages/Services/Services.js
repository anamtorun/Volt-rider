import React from 'react';
import Service from '../Service/Service';
import { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://ghoulish-mansion-73247.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h1 style={{ marginTop: "100px", textAlign: "center", color: "black" }}>
                ✈️ All Packages</h1>
            <br /><br />
            <div className='home-services'>

                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;