import { LOCATION, DESSERT_CHOICE, DRINK_CHOICE, CUISINE_CHOICE } from './action_types';

export const location = (text) => ({
  type: LOCATION,
  text
});

export const dessertChoice = (text) => ({
  type: DESSERT_CHOICE,
  text
});

export const drinkChoice = (text) => ({
  type: DRINK_CHOICE,
  text
});

export const cuisineChoice = (text) => ({
  type: CUISINE_CHOICE,
  text
});
