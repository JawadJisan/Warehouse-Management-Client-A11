import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../Hooks/useInventories';
import InventoryHomeItem from '../InventoryHomeItem/InventoryHomeItem';
import './Inventories.css'

const Inventories = () => {
const [inventoriesItem, setInventoriesItem] = useInventories();    
const InventoryItems = inventoriesItem.slice(0,6)
const navigate = useNavigate();

    
    return (
        <div>
            <p>            Inventory Items:{inventoriesItem.length}
</p>
            <div className='container'>
                <div className='row'>
                    <h2 className='title mt-5'>Inventories:{InventoryItems.length} </h2>
                    <div className='inventory-cards'>
                        {
                            InventoryItems?.map(item => <InventoryHomeItem  key={item._id} item={item}></InventoryHomeItem>)
                        }
                    </div>

                </div>
            </div>
            <Button onClick={() => navigate('/manageInventories')} className=''>Manage inventories</Button>

        </div>
    );
};

export default Inventories;