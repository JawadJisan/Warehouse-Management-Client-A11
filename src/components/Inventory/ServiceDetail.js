import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    // use custom hook এই কোড় টার বিপরীতে
    // const [service, setService] = useState({});
    // useEffect(()=>{
    //     const url = `https://still-plains-73268.herokuapp.com/service/${serviceId}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setService(data));
    // },[])

    const [service] = useServiceDetail(serviceId)

    return (
        <div>
            <h2>Welcome to details: {serviceId} {service.name} </h2>
            
            <div className='text-center'>
               
            </div>
        </div>
    );
};

export default ServiceDetail;