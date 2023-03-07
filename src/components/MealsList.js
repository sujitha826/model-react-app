import React, { useContext } from 'react';
// import useMealsContext from '../providers/MealsProvider';
import { MealsContext } from '../providers/MealsProvider';

export default function MealsList() {
    // const { meals } = useMealsContext(); // what context API provides to this component is taken for usage.
    const meals = useContext(MealsContext);
    console.log(meals);
    return (
        <div>
            <h1>Meals Menu</h1>
            {meals.map((meal, index) => <h2 key={index}>{meal}</h2>)}
        </div>
    )
}
