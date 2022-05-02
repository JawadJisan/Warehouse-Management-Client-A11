import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'; 

const ReviewItem = ({collectedItems, handleDelete}) => {
    // console.log(collectedItems);
    // const {product, handleDelete} = props;
    const {email, imageURL, name, price, quantity, } = collectedItems;
    return (
        <div className='review-item'>
            <div className='mx-1'>
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
            </div>
        </div>
    );
};

export default ReviewItem;