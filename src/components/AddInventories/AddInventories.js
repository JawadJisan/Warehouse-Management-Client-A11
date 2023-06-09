import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import auth from '../../firebase.init';
import './AddInventories.css'

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

    console.log(name, price, description, imageURL, quantity, supplier);

    const url = 'https://warehouse-management-server-a11.onrender.com/addInventories'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({name, description, price, quantity, supplier, imageURL }),
        headers: {
        'authorization':`${user.email} ${localStorage.getItem("accessToken")}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {console.log(data)
                        event.target.reset();
        });

}

    return (
        <div className='addNew' style={{ backgroundColor: "#12161f", height: "925px", color: "white" }}>
            
            
            {/* -------------------------- */}
            <div className="text-center mt-5 pt-5">
                <h1 className="mt-5 pt-5">Add New Inventories!!!!</h1>
            </div>

            <form className="row mt-5 m-5" onSubmit={addNewInventories}>
                <div className="col-md-6 mt-3">
                    <label for="name" className="form-label"><h4>Inventory Name</h4></label>
                    <input required style={{ backgroundColor: "#050c1f" }} placeholder="Write Inventory Name" name="name" className="form-control text-light" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="Price" className="form-label"><h4>Price</h4></label>
                    <input required style={{ backgroundColor: "#050c1f" }} placeholder="Price" name="Price" className="form-control text-light" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="description" className="form-label"><h4>Description</h4></label>
                    <input required style={{ backgroundColor: "#050c1f" }} placeholder="About Inventory" name="description" className="form-control text-light" />
                </div>
                <div className="col-md-6 mt-3">
                    <label for="quantity" className="form-label"><h4>Quantity</h4></label>
                    <input required style={{ backgroundColor: "#050c1f" }} placeholder="Quantity" name="quantity" className="form-control text-light" />
                </div>

                <div className="col-md-6 mt-3">
                    <label for="supplier" className="form-label"><h4>Suppeliar</h4></label>
                    <input required style={{ backgroundColor: "#050c1f" }} placeholder="Company Name(e.g: BMW, AUDI, etc" name="supplier" className="form-control text-light"  />
                </div>
                <div className="col-md-6 mt-3">
                    <label className="imageURL"><h4>Insert Image URL</h4></label>
                    <input required style={{ backgroundColor: "#050c1f" }} placeholder="Image Url" name="imageURL" className="form-control text-light"  />

                </div>
                <div className="col-12 d-grid ">
                    <button className="mt-4 btn btn-danger btn-lg btn-block" type="submit" ><FontAwesomeIcon icon={faPlusCircle} />  Add Inventories</button>
                </div>
            </form>
        </div>
    );
};

export default AddInventories;