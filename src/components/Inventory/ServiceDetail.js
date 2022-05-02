import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();


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