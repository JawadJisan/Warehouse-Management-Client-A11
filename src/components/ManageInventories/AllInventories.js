import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useInventories from '../Hooks/useInventories';

const AllInventories = ({ item }) => {
    const [inventoriesItem, setInventoriesItem] = useInventories()

    console.log(inventoriesItem._id, 'from all inventoryes')
    console.log(item._id, 'from all inventoryes')

    const deletInventories = id => {
        const proceed = window.confirm('Want to delet Inventory?')
        if (proceed) {
            // const url = `http://localhost:5000//inventory/${id}`
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventoriesItem.filter(item => item._id !== id);
                    setInventoriesItem(remaining);
                })
        }
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageURL} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {inventoriesItem.map(iitem => <Button onClick={() => deletInventories(iitem?._id)} variant="primary">Delet Stoc</Button> )

                        
                    }
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllInventories;