import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import useInventories from '../Hooks/useInventories';

const AllInventories = (props) => {
    const{_id, name, price} = props.item;
    // console.log(_id)
    const [inventoriesItem, setInventoriesItem] = useInventories()
    
    // console.log(inventoriesItem._id, 'from all inventoryes')
    // console.log(item._id, 'from all inventoryes')

    // const deletInventories = id => {
    //     const proceed = window.confirm('Want to delet Inventory?')
    //     if (proceed) {
    //         // const url = `http://localhost:5000//inventory/${id}`
    //         fetch(`http://localhost:5000/inventory/${id}`, {
    //             method: 'DELETE',
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 const remaining = inventoriesItem.filter(item => item._id !== id);
    //                 setInventoriesItem(remaining);
    //             })
    //     }
    // }
    const handleDelet = id => {

        const proceed = window.confirm('Are you sure??')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // const remaining = inventoriesItem.filter(service => service._id !== id);
                    // setInventoriesItem(remaining);
                })
        }
    }

    return (
        <div>
            {/* <Card style={{ width: '18rem' }}>
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
            </Card> */}
             <div className="m-1 mb-4 col-md-3">
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark"> Name : {name} </span></li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Price : $-{price} </span> </li>
                {/* <li className="list-group-item "><span className="fw-bolder text-dark">Food Weight : {weight} Kg</span> </li> */}
                <li onClick={() => handleDelet(_id)} className="list-group-item "><span className="btn btn-outline-danger fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Food</span></li>

            </ul>
        </div>
        </div>
    );
};

export default AllInventories;