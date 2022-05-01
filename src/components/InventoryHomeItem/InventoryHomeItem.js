import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InventoryHomeItem.css'

const InventoryHomeItem = ({ item }) => {
    const {_id} = item;
    console.log(_id)
    const navigate = useNavigate();
    const goInventory = id =>{
        // navigate(`/inventories/${id}`)
        navigate(`/service/${id}`);

    }
    console.log(item)
    return (
       <div>
            {/* <div className='card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageURL} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <h1>id: {_id} </h1>
                    <Button variant="secondary" onClick={() =>{goInventory(_id)}}>Manage Stocks</Button>
                </Card.Body>
            </Card>
        </div> */}
        /* ------------------- */
        <div className="col-md-3 m-3 ">
            <div style={{ border: "3px solid #dc3545", borderRadius: "5px" }} class="card h-100 mb-3 card-bg text-light  focus">
                <img src={item.imageURL} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 class="card-title">Name : {item.name}</h5>
                    <p class="card-text">{item.description} </p>
                    <h4>Quantity: {item.quantity} </h4>
                    <h5>Price : {item.price} $</h5>
                </div>
                <button onClick={() =>{goInventory(_id)}} className="btn btn-lg m-3 text-light btn-danger fw-bold"><FontAwesomeIcon icon={faShoppingCart} /> Manage Stocks</button>
            </div>
        </div >
       </div>
    );
};

export default InventoryHomeItem;