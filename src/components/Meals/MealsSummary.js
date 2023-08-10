import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>From Our Kitchen to Your Table</h2>
            <p> Choose your favorite meal from our broad selection of
                available meals and enjoy a delicious lunch or dinner at home 🍔</p>
            {/* <p> 🍜 </p> */}
        </section>
    );
}

export default MealsSummary;