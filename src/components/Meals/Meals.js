import {Fragment} from 'react';
import Header from '../Layout/Header';

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = ()=> {
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
};

export default Meals;