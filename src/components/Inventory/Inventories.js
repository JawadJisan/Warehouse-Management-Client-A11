import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useInventories from "../Hooks/useInventories";
import InventoryHomeItem from "../InventoryHomeItem/InventoryHomeItem";
import "./Inventories.css";

const Inventories = () => {
  const [inventoriesItem, setInventoriesItem] = useInventories();
  const InventoryItems = inventoriesItem.slice(0, 6);
  const navigate = useNavigate();

  return (
    <div>
      <p> Inventory Item:{inventoriesItem.length}</p>
      <div id="Foods" className="  mt-5 pt-5 ">
        <h1 className="text-center text-light display-2 mt-5 pt-5">
          Inventories In Our Stocks
        </h1>
        <div className="inv-container">
          {InventoryItems.map((item) => (
            <InventoryHomeItem item={item} key={item._id}></InventoryHomeItem>
          ))}
        </div>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={() => navigate("/manageInventories")}
          className="btn text-center btn-lg m-3 text-light btn-danger mx-auto fw-bold"
        >
          Manage inventories
        </button>
      </div>
    </div>
  );
};

export default Inventories;
