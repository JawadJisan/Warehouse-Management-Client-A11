import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventories from '../Hooks/useInventories';
import InventoryHomeItem from '../InventoryHomeItem/InventoryHomeItem';
import './Inventory.css'

const Inventory = () => {
    
    const [inventoriesItem, setInventoriesItem] = useInventories();
    
    const InventoryItems = inventoriesItem.slice(0,6)
const navigate = useNavigate();

    
    return (
        <div>
            <p>            Inventory Items:
</p>
            <div className='container'>
                <div className='row'>
                    <h2 className='title mt-5'>Inventories:{InventoryItems.length} </h2>
                    <div className='inventory-cards'>
                        {
                            InventoryItems?.map(item => <InventoryHomeItem  item={item}></InventoryHomeItem>)
                        }
                    </div>

                </div>
            </div>
            {/* <Button>Manage Inventories</Button> */}
            <button onClick={() => navigate('/manageInventories')} className='mt-10 mx-auto py-2 px-3 text-white  rounded-2xl bg-sky-400'>Manage inventories</button>

        </div>
    );
};

export default Inventory;