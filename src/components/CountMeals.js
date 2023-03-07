import React, { useState, useContext } from 'react';
// import { useMealsContext } from '../providers/MealsProvider';
import { MealsContext } from '../providers/MealsProvider';

export default function CountMeals() {
  const meals = useContext(MealsContext);
  const [remainingMeals, setRemainingMeals] = useState(meals.length);

  return (
    <div>
      <h1>No of Meals : {remainingMeals}</h1>
    </div>
  );
}
