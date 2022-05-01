import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventoryDetails from '../Hooks/useInventoryDetails';
import useServiceDetail from '../Hooks/useServiceDetail';
import './SingleInventory.css'

const SingleInventory = () => {
    const [inventoriesItem, setInventoriesItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventoriesItem(data))
    }, [])
    const [user, loading, error] = useAuthState(auth);
    const { serviceId } = useParams();
    const navigate = useNavigate();
    // const [inventory] =  
    console.log('from single Inventories', serviceId)

    const [service] = useServiceDetail(serviceId);
    console.log('single service', service)

    const handleDeveler = inventoryItem => {
        const { name, price, imageURL, quantity } = inventoryItem;
        fetch('http://localhost:5000/delivered', {
            method: 'POST',
            body: JSON.stringify({
                name, price, imageURL, quantity, email: user?.email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                alert('Delevered Inventory'),
                    console.log(data)
            });


    }

    return (
        <div style={{ backgroundColor: '#EBF4FA', marginTop: '100px' }} >

            <h1 className='detail-title'>Details Information of <span className='inve-name'>{service?.name}</span> </h1>

            <div className="row d-flex justify-content-center ">
                <div className="col-md-3 m-3 ">
                    <div style={{ border: "3px solid #dc3545", borderRadius: "5px" }} class="card h-100 mb-3 card-bg text-light  focus">
                        <img src={service?.imageURL} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Name : {service?.name}</h5>
                            <h5 class="card-title">Supplier : {service?.supplier}</h5>
                            <h5 class="card-title">Quantity : {service?.quantity}</h5>
                            <p class="card-text">Description {service?.description} </p>
                            <h5>Price : {service?.price} $</h5>
                        </div>

                        <button onClick={() => handleDeveler(service)} className="btn btn-lg m-3 text-light btn-danger fw-bold"> Delivered</button>
                    </div>
                </div >
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button onClick={() => navigate('/manageInventories')} className="btn text-center btn-lg m-3 text-light btn-danger mx-auto fw-bold">Manage inventories</button>
                </div>
            </div>
            );
};

            export default SingleInventory;