import React, { useState } from 'react';
import DUMMY_MEALS from "./dummyMeals";
import classes from "./AvailableMeals.module.css";
const AvailableMeals = () => {
    const [avaiableMeals, setAaiableMeals] = useState(DUMMY_MEALS)
    console.log(avaiableMeals);
    const mealsList = avaiableMeals.map(meal => <li >{meal.name}</li>)
    return (
        <section className={classes.meals}>
            <ul >
                {mealsList}
            </ul>
        </section>
    );
};

export default AvailableMeals;