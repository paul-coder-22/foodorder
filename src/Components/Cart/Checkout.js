import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './Checkout.moudle.css';


const isEmpty = value => value.trim() === "";
const isFiveChar = value => value.trim().length === 5;



const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })


    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()


    const confirmHandler = (event) => {
        event.preventDefault();

        const entredName = nameInputRef.current.value;
        const entredStreet = streetInputRef.current.value;
        const entredPostalCode = postalInputRef.current.value;
        const entredCity = cityInputRef.current.value;


        const enteredNameIsValid = !isEmpty(entredName);
        const enteredStreetIsValid = !isEmpty(entredStreet);
        const enteredPostalCodeIsValid = isFiveChar(entredPostalCode);
        const enteredCityIsValid = !isEmpty(entredCity);

        console.log(enteredPostalCodeIsValid);
        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })


        const formIsValid = enteredNameIsValid
            && enteredStreetIsValid
            && enteredPostalCodeIsValid
            && enteredCityIsValid;

        if (!formIsValid) {
            return;
        }


        props.onConfirm({
            name: entredName,
            street: entredStreet,
            city: entredCity,
            postalCode: entredPostalCode,
        })

    };

    return (
        <form className="form" onSubmit={confirmHandler}>
            <div className={`control ${formInputValidity.name ? "" : "invalid"}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`control ${formInputValidity.street ? "" : "invalid"}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={`control ${formInputValidity.postalCode ? "" : "invalid"}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputValidity.postalCode && <p>Please enter a valid postal!</p>}
            </div>
            <div className={`control ${formInputValidity.city ? "" : "invalid"}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}
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