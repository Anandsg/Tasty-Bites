import React from "react";
import CartContext from "./Cart-context";

const CartProvier = (props) => {

    const addItemsToCartHandler = (item) => {

    }

    const removeItemsFromCartHandler = (id) => {

    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemsToCartHandler,
        removeItem: removeItemsFromCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvier;