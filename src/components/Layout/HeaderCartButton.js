import React, { useState } from 'react'
import { useContext, useEffect } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/Cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const CartCtx = useContext(CartContext)

    const { items } = CartCtx;
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        // here is the user clicks on cart button the produc will show 
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}> <CartIcon /> </span>
            <span> Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;