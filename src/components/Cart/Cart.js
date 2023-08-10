import React, { useContext } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/Cart-context"

const Cart = (props) => {
    const CartCtx = useContext(CartContext)

    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
    const hasItems = CartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        CartCtx.removeItem(id);

    }

    const cartItemAddHandler = (item) => {
        CartCtx.addItem({ ...item, amount: 1 })
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
          {CartCtx.items.map((item) => (
            <CartItem
              key={item.id} // Place the key prop here
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );
      
    return (
        // also we need to call onclose here as the modal form is being used 
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                {/* in the below line calling onClose from app comp using props */}
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;