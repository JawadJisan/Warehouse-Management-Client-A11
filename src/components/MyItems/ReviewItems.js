import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import './ReviewItem.css';
import toast, { Toaster } from 'react-hot-toast';


const ReviewItem = ({ collectedItems, handleDelete }) => {
    // console.log(collectedItems);
    // const {product, handleDelete} = props;
    const { email, imageURL, name, price, quantity, } = collectedItems;
    
   
    return (
        // <div className='review-item'>
        <div className='review-container'>
            {/* <div className='mx-1'>
                <img src={imageURL} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name}
                    </p>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleDelete(collectedItems?._id)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div> */}
            <Table striped bordered hover className='table-con'>
                <thead>
                    <tr className='text-center t-header align-center items-center' >
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Email</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='t-cell'>{name} </td>
                        <td className='t-cell'>{price} </td>
                        <td className='t-cell'>{quantity} </td>
                        <td className='t-cell'>{email} </td>
                        <td className='t-cell'><img className='imgs' src={imageURL} alt="" /></td>
                        <td ><div className="delete-container">
                    <button  onClick={() => handleDelete(collectedItems?._id)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ReviewItem;