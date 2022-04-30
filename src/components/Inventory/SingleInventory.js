import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetails from '../Hooks/useInventoryDetails';
import useServiceDetail from '../Hooks/useServiceDetail';

const SingleInventory = () => {
    const {serviceId} = useParams();
    // const [inventory] =  
    console.log('from single Inventories', serviceId)

    const [service] = useServiceDetail (serviceId);

    return (
        <div>
                <h1> Welcome to Detail inventory : {serviceId} </h1>
                <p>Name:  {service?.name} </p>
                
        </div>
    );
};

export default SingleInventory;