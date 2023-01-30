import React, { useContext } from 'react';
import { useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css";
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = (props) => {

    const cartCtx = useContext(CartContext)
    const [isCheckOut, setIsCheckOut] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
    const hasItem = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
        console.log(id);
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const orderHandler = () => {
        setIsCheckOut(true)
    }

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    // instead of sending whole item I've only send id 
                    onAdd={cartItemAddHandler.bind(null, item)}

                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            )}
    </ul>

    const modalAction = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItem && <button className={classes.button} onClick={orderHandler} >Order</button>}
    </div>

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        await fetch('https://firecrud-486cd-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItem: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart()
    }


    const cartModalContent = <React.Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}$</span>
        </div>
        {
            isCheckOut && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
        }
        {
            !isCheckOut && modalAction
        }
    </React.Fragment>

    const isSubmittingModalContent = <p>sending order data...</p>
    const didSubmitModalContent = <>
        <p>Successfully  sent the order!  </p>
        <div className={classes.actions}>
            <button className={classes['button']} onClick={props.onClose}>Close</button>
        </div>
    </>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}

        </Modal>
    );
};

export default Cart;