import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user, 'from my items')
    const [myOrder, setMyOrder] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/myItems`;
        fetch(url, {
            headers:{
        'authorization': `${user?.email} ${localStorage.getItem("accessToken")}`,
        },
        })
        .then(res => res.json())
        .then(data => setMyOrder(data))
    },[user?.email])
    return (
        <div>
       <h1>Delevered Inventories: {myOrder.length} </h1>
       {
           myOrder.map(order => <li>{order.name} </li> )
       }
        </div>
    );
};

export default MyItems;