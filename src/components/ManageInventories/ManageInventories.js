import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../Hooks/useInventories';
import AllInventories from './AllInventories';

const ManageInventories = () => {
    const [inventoriesItem, setInventoriesItem] = useInventories();
    console.log(inventoriesItem);
    const navigate = useNavigate();

    return (
        <div>
            <p>  Inventory Items:{inventoriesItem.length}</p>

            <div className='container'>
                <div className='row'>
                    <div className='inventory-cards'>
                        {
                        inventoriesItem?.map(item => <AllInventories key={inventoriesItem._id} item={item}></AllInventories>)
                        }
                    </div>

                </div>
            </div>
            <Button onClick={() => navigate('/addinventories')} className=''>add new Inventories</Button>

        </div>

    );
};

export default ManageInventories;