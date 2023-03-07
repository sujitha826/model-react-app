import React, { useState } from 'react';
export const MealsContext = React.createContext();

export default function MealsProvider({ children }) {

    const [mealsList, setMealsList] = useState(['Baked potatoes', 'Grilled Veggies', 'French Fries', 'Chicken Soup']);

    return (
        <MealsContext.Provider value={mealsList}>
            {children}
        </MealsContext.Provider>
    );
}

// export const useMealsContext = () => React.useContext(MealsContext);