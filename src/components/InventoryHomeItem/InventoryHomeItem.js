import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
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
        <div className='card'>
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
        </div>
    );
};

export default InventoryHomeItem;