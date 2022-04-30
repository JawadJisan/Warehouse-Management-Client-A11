import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useInventoryDetails from '../Hooks/useInventoryDetails';
import useServiceDetail from '../Hooks/useServiceDetail';

const SingleInventory = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    // const [inventory] =  
    console.log('from single Inventories', serviceId)

    const [service] = useServiceDetail (serviceId);

    return (
        <div>
                <h1> Welcome to Detail inventory : {serviceId} </h1>
                <p>Name:  {service?.name} </p>
                <p>Quantity: {service.quantity}</p>
                <Button>Delivered</Button>
                <Button onClick={() => navigate('/manageInventories')} className=''>Manage inventories</Button>

        </div>
    );
};

export default SingleInventory;