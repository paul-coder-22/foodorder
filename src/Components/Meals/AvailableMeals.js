import React, { useState } from 'react';
import classes from "./AvailableMeals.module.css";
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect } from 'react';
const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);

    useEffect(() => {

        const fetchMeals = async () => {
            const response = await fetch('https://firecrud-486cd-default-rtdb.firebaseio.com/meals.json');



            if (!response.ok) {
                throw new Error("Some new Error Occur");
            }


            const responseDate = await response.json();
            const loadedMeals = [];
            for (const key in responseDate) {
                loadedMeals.push({
                    id: key,
                    name: responseDate[key].name,
                    description: responseDate[key].description,
                    price: responseDate[key].price,
                })
            }

            setMeals(loadedMeals)
            setIsLoading(false)
        }
        /* fetchMeals is promise so to catch the error we use catch block after ward  */
        fetchMeals().catch((error) => {
            setIsLoading(false)
            setHttpError(error.message)
        })

    }, [])

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading ...</p>
            </section>
        )
    }

    if (httpError) {
        return (
            <section className={classes.mealsError}>
                <p>{httpError}</p>
            </section>
        )
    }

    const mealsList = meals.map(meal =>
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