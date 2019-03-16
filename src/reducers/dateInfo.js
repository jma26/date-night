import { LOCATION, DESSERT_CHOICE, CUISINE_CHOICE, DRINK_CHOICE } from '../actions/action_types';

const dateInfo = (state = {}, action) => {
  switch(action.type) {
    case LOCATION:
      return {
        ...state,
        location: action.text,
      }
    case DRINK_CHOICE:
      return {
        ...state,
        drink: action.text,
      }
    case CUISINE_CHOICE:
      return {
        ...state,
        cuisine: action.text,
      }
    case DESSERT_CHOICE:
      return {
        ...state,
        dessert: action.text,
      }
    default:
      return state
  }
}

export default dateInfo;
