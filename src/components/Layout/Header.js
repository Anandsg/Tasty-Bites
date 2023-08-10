import React, { Fragment } from "react"
import mealsImage from '../../assets/meals.jpg'
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2> Tasty Bites </h2>
                {/* onClick has passed to the header cart button component */}
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table with verities food" />
            </div>
        </Fragment>

    )
}
export default Header;