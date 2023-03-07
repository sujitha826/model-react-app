import React from 'react';
import MealsProvider from '../providers/MealsProvider';
import MealsList from './MealsList';
import CountMeals from './CountMeals';

export default function Meals() {
  return (
    <MealsProvider>
      <MealsList />
      <CountMeals />
    </MealsProvider>
  );
}
