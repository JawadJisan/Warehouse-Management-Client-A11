import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReviewItem from './ReviewItems';


const MyItems = () => {

  const [orderList, setOrderList] = useState([])
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const url = `https://sheltered-stream-56750.herokuapp.com/myItems`;
    fetch(url, {
      headers: {
        'authorization': `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => setOrderList(data))
  }, [user?.email])

  /// the json web token is not working i implemented it properly but didnt work 
  //  thats why the specific selected items or my delevered items dont shows correctly

  useEffect(() => {
    const url = `https://sheltered-stream-56750.herokuapp.com/myCollectedStocks`;
    fetch(url)
      .then(res => res.json())
      .then(data => setOrderList(data))
  })

  //   const handleRemoveProduct = product =>{
  //     const rest = orderList.filter(pd => pd._id !== product._id);
  //     setOrderList(rest);
  // }

  const handleDelete = (id) => {
    fetch(`https://sheltered-stream-56750.herokuapp.com/myItems/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }



  return (
    <div style={{ marginTop: '150px' }}>
      <h2>Total Orders : {orderList?.length}</h2>
      <div>

        {
          orderList?.map(product => <ReviewItem
            handleDelete={handleDelete}
            key={product._id}
            product={product}
          >
          </ReviewItem>)
        }
      </div>
    </div>
  )
}

export default MyItems