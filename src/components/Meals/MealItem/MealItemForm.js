import React, { useState, useRef } from "react";
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["form-control"]}>
                <label htmlFor="amount">Amount</label>
                <input
                    ref={amountInputRef}
                    type="number"
                    id="amount"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="1"
                />
            </div>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    );
}

export default MealItemForm;
