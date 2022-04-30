import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './InventoryHomeItem.css'

const InventoryHomeItem = ({ item }) => {
    const {_id} = item;
    console.log(_id)
    const navigate = useNavigate();

    const goInventory = _id =>{
        navigate(`/inventory/${_id}`)
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
                    <Button variant="secondary" onClick={() =>{goInventory(_id)}}><Link to='/inventory'>Manage Stocks</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryHomeItem;