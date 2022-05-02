import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventoryDetails from '../Hooks/useInventoryDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import useServiceDetail from '../Hooks/useServiceDetail';
import './SingleInventory.css'
import axios from 'axios';

const SingleInventory = () => {
    const [inventoriesItem, setInventoriesItem] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    if(user){
        console.log(user, 'from single')
    }


    useEffect(() => {
        fetch('https://sheltered-stream-56750.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventoriesItem(data))
    }, [])
    // const [user, loading, error] = useAuthState(auth);
    const { serviceId } = useParams();
    const navigate = useNavigate();
    console.log('from single Inventories', serviceId)

    const [service] = useServiceDetail(serviceId);
    console.log('single service', service)

    const handleDeveler = inventoryItem => {
        const { name, price, imageURL, quantity } = inventoryItem;
        console.log(name, price, user?.email, quantity)
        fetch('https://sheltered-stream-56750.herokuapp.com/delivered', {
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
     /* =-------- */
     const handleDelever = inventoryItem =>{
        const { name, price, imageURL, quantity } = inventoryItem;
         const order = {
             name, price, imageURL, quantity, email:user?.email
         }
         console.log(order)
         axios.post('http://localhost:5000/deliveredNAME', order)
         .then(response => {
             const {data} = response;
             if(data.insertedId){
                 alert('Delivered is book')
             }
         })
         
     }


    const handleRestock = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    console.log(name, quantity)

    fetch(`http://localhost:4000/inventorie/${serviceId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, quantity }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    



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
                            <h5>Email : {user?.email} </h5>

                        </div>

                        <button onClick={() => handleDeveler(service)} className="btn btn-lg m-3 text-light btn-danger fw-bold"> Delivered</button>
                        <button onClick={() => handleDelever(service)} className="btn btn-lg m-3 text-light btn-danger fw-bold"> Delivered</button>
                    </div>
                </div >
                </div>

                {/* --------------- update the stocks */}
                <div className="text-center mt-5 pt-5">
                <h1 className="mt-5 pt-5">Restock The Items!!!!</h1>
            </div>

                <form className="row mt-5 m-5" 
                onSubmit={handleRestock}>
                <div className="col-md-6 mt-3">
                    <label for="name" className="form-label"><h4>Inventory Name</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Write Inventory Name" name="name" className="form-control text-light" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="quantity" className="form-label"><h4>Quantity</h4></label>
                    <input style={{ backgroundColor: "#050c1f" }} placeholder="Quantity" name="quantity" className="form-control text-light" />
                </div>

                <div className="col-12 d-grid ">
                    <button className="mt-4 btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Update</button>
                </div>
            </form>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button onClick={() => navigate('/manageInventories')} className="btn text-center btn-lg m-3 text-light btn-danger mx-auto fw-bold">Manage inventories</button>
                </div>
            </div>
            );
};

            export default SingleInventory;