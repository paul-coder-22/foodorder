import React from 'react';
import classes from './Checkout.moudle.css';

const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={confirmHandler}>
            <div className="control">
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' />
            </div>
            <div className="control">
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' />
            </div>
            <div className="control">
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' />
            </div>
            <div className="control">
                <label htmlFor='city'>City</label>
                <input type='text' id='city' />
            </div>
            <div className="actions">
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className="submit">Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;