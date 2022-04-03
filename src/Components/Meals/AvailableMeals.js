import React, { useState } from 'react';
import DUMMY_MEALS from "./dummyMeals";
import classes from "./AvailableMeals.module.css";
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
    const [avaiableMeals, setAaiableMeals] = useState(DUMMY_MEALS)
    const mealsList = avaiableMeals.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;