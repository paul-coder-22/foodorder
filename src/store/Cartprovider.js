import React, { useReducer } from 'react';
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;


        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]

        /* Check For exsistng item */
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    console.log(action.type);
    if (action.type === "REMOVE") {
        const exiastngCartItemndex = state.items.findIndex(
            item => item.id === action.id
        )
        const exsistingItem = state.items[exiastngCartItemndex]
        const updatedTotalAmount = state.totalAmount - exsistingItem.price

        let updatedItems;
        if (exsistingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.d !== action.id)

        } else {
            const updatedItem = { ...exsistingItem, amount: exsistingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[exiastngCartItemndex] = updatedItem;
        }

        console.log(updatedItems);
        console.log(updatedTotalAmount);
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    return defaultCartState
}


const Cartprovider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => dispatchCartAction({ type: "ADD", item: item })

    const removeItemFromCartHandler = id => dispatchCartAction({ type: "REMOVE", id: id })

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};


export default Cartprovider;