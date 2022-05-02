import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ReviewItem from './ReviewItems';


const MyItems = () => {

  const [orderList, setOrderList] = useState([])
  const [collected, setCollected] = useState([])
  const [user, loading, error] = useAuthState(auth);
  // console.log(orderList)


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
      .then(data => setCollected(data))
  })

 

  const handleDelete = (id) => {
    const proceed = window.confirm('Are You Sure Delet Your Selected Inventory??')
    if(proceed){

      fetch(`https://sheltered-stream-56750.herokuapp.com/myItems/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }
  }


  return (
    <div style={{ marginTop: '150px' }}>
      <h2 className='text-center'>You Have Total Delivered {collected.length} Inventory  </h2>
      <div className='align-center p-5 mx-auto '>
        {
          collected.map(collectedItems =>
            <ReviewItem
            key={collectedItems._id}
            collectedItems={collectedItems}
            handleDelete={handleDelete}
            ></ReviewItem>
            // <p>Name: {collectedItems.name}</p>
          )
        }
      </div>

    </div>
  )
}

export default MyItems