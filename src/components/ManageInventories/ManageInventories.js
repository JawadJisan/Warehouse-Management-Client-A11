import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../Hooks/useInventories';
import AllInventories from './AllInventories';
import toast, { Toaster } from 'react-hot-toast';

import './ManageInventories.css'

const ManageInventories = () => {

    const [inventoriesItem, setInventoriesItem] = useInventories();
    const navigate = useNavigate();

    const handleDelet = id => {
        const proceed = window.confirm('Are you sure??')
        if (proceed) {
            const url = `https://warehouse-management-server-a11.onrender.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventoriesItem.filter(service => service._id !== id);
                    setInventoriesItem(remaining);
                })
        }
    }
    const [inventorys, setInventorys] = useState([])
    useEffect(()=>{
        fetch('https://warehouse-management-server-a11.onrender.com/inventories')
        .then(res=>res.json())
        .then(data => setInventorys(data));
    },[inventorys])
    return (
        <div style={{ backgroundColor: "#12161f", paddingTop:'30px' ,marginTop: '50px', color: "white" }}>
            <h1 className='inv-title'>All Inventories</h1>


            <div className="text-center mt-5 pt-5">
                <h1 className="text-center ">Total  {inventoriesItem.length} Inventories!!!!!</h1>
                <div className=" m-container justify-content-center">
                    {
                        inventorys.map(item => <AllInventories key={item._id} id={item._id} item={item}></AllInventories>)
                    }
                </div>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
  <button onClick={() => navigate('/addinventories')} className="btn text-center btn-lg m-3 text-light btn-primary mx-auto fw-bold">Add New Inventories</button>

</div>


        </div>

    );
};

export default ManageInventories;