import React from 'react'
import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/Cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const CartCtx = useContext(CartContext)

    const numberOfCartItems = CartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)


    return (
        // here is the user clicks on cart button the produc will show 
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}> <CartIcon /> </span>
            <span> Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;