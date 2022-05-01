import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

  const [user, loading, error] = useAuthState(auth);
  console.log('from my items', user?.email)
  const [orderList, setOrderList] = useState([])
  console.log(orderList)

  useEffect(() => {
    const url = `http://localhost:5000/myItems`;
    fetch(url, {
      headers: {
        'authorization': `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
    .then(res => res.json())
    .then(data => setOrderList(data))
  },[user?.email])

  return (
    <div>
      <h2>Total Orders : {orderList.length}</h2>
    </div>
  )
}

export default MyItems