import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../Hooks/useInventories';
import AllInventories from './AllInventories';

const ManageInventories = () => {
    const [inventoriesItem, setInventoriesItem] = useInventories();
    const navigate = useNavigate();  

     const handleDelet = id =>{
        const proceed = window.confirm('Are you sure??')
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
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
    return (
        <div>
            <p>  Inventory Items:{inventoriesItem.length}</p>
            <h1>All Inventories</h1>

            <div className='container'>
                <div className='row'>
                    <div className='inventory-cards'>
                        {/* {
                        inventoriesItem?.map(item => <AllInventories key={inventoriesItem._id} item={item}></AllInventories>)
                        } */}
                        {
                inventoriesItem.map(service => <div key={service._id}>
                    <h6>{service.name} <button onClick={() => handleDelet(service._id)}>Delet</button> </h6>
                </div> )
            }
                    </div>

                </div>
            </div>
            <Button onClick={() => navigate('/addinventories')} className=''>add new Inventories</Button>

        </div>

    );
};

export default ManageInventories;