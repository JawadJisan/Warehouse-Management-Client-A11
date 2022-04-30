import React from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const {_id} = useParams();
    console.log('from single Inventories', _id)

    return (
        <div>
                <h1>{_id} </h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur autem, error laboriosam iure nemo? Voluptas veritatis dolorum aliquam. Sed alias molestias sint dolor et eveniet sequi animi, cumque sapiente!</h1>
        </div>
    );
};

export default SingleInventory;