import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventories = () => {
    const [user, loading, error] = useAuthState(auth);


    const addNewInventories = event =>{
    event.preventDefault();

    
    const name = event.target.name.value;
    const price = event.target.Price.value;
    const description = event.target.description.value;
    const imageURL = event.target.imageURL.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;

    console.log(name, price, description, imageURL, quantity, supplier)

    const url = 'http://localhost:5000/addInventories'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({name, description, price, quantity, supplier, imageURL }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {console.log(json)
                        event.target.reset();
        });

}

    return (
        <div className='container'>
            Add New Inventories
            <Form onSubmit={addNewInventories}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required className="mb-3" name='name' type="text" placeholder="Name" />
                    <Form.Control required className="mb-3" name='Price' type="number" placeholder="Price" />
                    <Form.Control required className="mb-3" name='description' type="text" placeholder="description" />
                    <Form.Control required className="mb-3" name='imageURL' type="text" placeholder="imageURL" />
                    <Form.Control required className="mb-3" name='quantity' type="number" placeholder="quantity" />
                    <Form.Control required className="mb-3" name='supplier' type="text" placeholder="supplier" />
                </Form.Group>

                
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddInventories;