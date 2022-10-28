import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css";
import CartItem from './CartItem';
const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
    const hasItem = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
        console.log(id);
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
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
                    onAdd={cartItemAddHandler.bind(null, item.id)}
                    onRemove={cartItemRemoveHandler.bind(null, item)}
                />
            )}
    </ul>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}$</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;