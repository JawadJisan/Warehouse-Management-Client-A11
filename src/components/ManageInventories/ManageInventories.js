import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../Hooks/useInventories';

const ManageInventories = () => {
    const [inventoriesItem, setInventoriesItem] = useInventories();
    const navigate = useNavigate();

    return (  
        <div>
            <p>  Inventory Items:{inventoriesItem.length}</p>
            <div className='container'>
                <div className='row'>
                    <div className='inventory-cards'>
                        {
                            // inventoriesItem?.map
                        }
                    </div>

                </div>
            </div>
           

        </div>

    );
};

export default ManageInventories;