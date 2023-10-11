import { createAction } from '@reduxjs/toolkit';

export const addCar = createAction('carsRent/addFavorite');

export const removeCar = createAction('carsRent/removeFavorite');

export const filterMake = createAction('carsRent/filterMake');
