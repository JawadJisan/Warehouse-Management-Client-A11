import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventoryDetails from '../Hooks/useInventoryDetails';
import useServiceDetail from '../Hooks/useServiceDetail';

const SingleInventory = () => {
    const [inventoriesItem, setInventoriesItem] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/inventories')
        .then(res => res.json())
        .then(data => setInventoriesItem(data))
    },[])
    const [user, loading, error] = useAuthState(auth);
    const {serviceId} = useParams();
    const navigate = useNavigate();
    // const [inventory] =  
    console.log('from single Inventories', serviceId)

    const [service] = useServiceDetail (serviceId);
    console.log('single service', service)

    const handleDeveler = inventoryItem => {
        const {name, price, imageURL, quantity} = inventoryItem;
        fetch('http://localhost:5000/delivered',{
            method: 'POST',
            body: JSON.stringify({
                name, price, imageURL, quantity,  email: user?.email,
            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => alert('Delevered Inventory'));


    }

    return (
        <div>
                <h1> Welcome to Detail inventory : {serviceId} </h1>
                <p>Name:  {service?.name} </p>
                <p>Quantity: {service.quantity}</p>
                <Button onClick={()=>handleDeveler(service)}>Delivered</Button>
                <Button onClick={() => navigate('/manageInventories')} className=''>Manage inventories</Button>

        </div>
    );
};

export default SingleInventory;