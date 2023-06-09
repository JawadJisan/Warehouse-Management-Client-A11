import React, { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventoriesItem, setInventoriesItem] = useState([]);
    
    useEffect(()=>{
        fetch('https://warehouse-management-server-a11.onrender.com/inventories')
        .then(res=>res.json())
        .then(data=> {setInventoriesItem(data)
        // console.log(data, 'from mongo db')
        });
    },[])
    return [inventoriesItem, setInventoriesItem];
};

export default useInventories;