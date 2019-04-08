import { FETCH_YELP_SUCCESS, FETCH_YELP_FAIL } from '../actions/action_types';

const yelpData = (state = {}, action) => {
  switch(action.type) {
    case FETCH_YELP_SUCCESS:
      return {
        status: action.response.data.status,
        drink: action.response.data.drink,
        restaurant: action.response.data.restaurant,
        dessert: action.response.data.dessert
      }
    case FETCH_YELP_FAIL:
      return {
        status: action.error.message,
        hasError: true,
      }
    default:
      return state
  }
}

export default yelpData;
