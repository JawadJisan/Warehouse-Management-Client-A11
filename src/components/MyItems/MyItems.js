import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ReviewItem from "./ReviewItems";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const MyItems = () => {
  const [orderList, setOrderList] = useState([]);
  const [collected, setCollected] = useState([]);
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  // console.log(user)

  useEffect(() => {
    const url = `https://warehouse-management-server-a11.onrender.com/myItems`;
    fetch(url, {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user?.email]);

  /// the json web token is not working i implemented it properly but didnt work
  //  thats why the specific selected items or my delevered items dont shows correctly

  useEffect(() => {
    const url = `https://warehouse-management-server-a11.onrender.com/myCollectedStocks`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCollected(data));
  });

  // getdelivered  by username from delivered collections
  const [di, setDi] = useState([]);
  const [DiUsingName, setDiUsingName] = useState([]);

  useEffect(() => {
    const getDi = async () => {
      const email = user?.email;
      // const url =`https://warehouse-management-server-a11.onrender.com/getdeliveredNAME?email=${email}`;
      const url = `https://warehouse-management-server-a11.onrender.com/getdeliveredNAME?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setDi(data);
      } catch (error) {
        console.log(error.message);
        toast(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/registration");
        }
      }
    };
    getDi();
  }, [di, navigate, user]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You Sure Delet Your Selected Inventory??"
    );
    if (proceed) {
      fetch(
        `https://warehouse-management-server-a11.onrender.com/myItems/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("Inventory Deleted Successfully");
        });
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <h2 className="text-center">
        You Have Total Delivered {di.length} Inventory{" "}
      </h2>

      {/* get order using userName */}
      <div className="align-center p-5 mx-auto ">
        {di.map(
          (collectedItems) => (
            <ReviewItem
              key={di._id}
              collectedItems={collectedItems}
              handleDelete={handleDelete}
            ></ReviewItem>
          )
          // <p>Name: {collectedItems.name}</p>
        )}
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default MyItems;
