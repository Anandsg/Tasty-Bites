import React from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'c1',
        name: 'Anand',
        amount: '2',
        price: '132.23',
    }].map((item) => <li key={item.id}>{item.name}</li>)}</ul>;
    return (
        // also we need to call onclose here as the modal form is being used 
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>745</span>
            </div>
            <div className={classes.actions}>
                {/* in the below line calling onClose from app comp using props */}
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;