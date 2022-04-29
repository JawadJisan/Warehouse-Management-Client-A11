import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './InventoryHomeItem.css'

const InventoryHomeItem = ({ item }) => {
    return (
        <div className='card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageURL} />
                <Card.Body>
                    <Card.Title>{item.admin}</Card.Title>
                    <Card.Text>
                        {item.comment}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default InventoryHomeItem;