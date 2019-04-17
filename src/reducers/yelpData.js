import { FETCH_YELP_SUCCESS, FETCH_YELP_FAIL, FETCH_YELP_REQUEST } from '../actions/action_types';

const yelpData = (state = {}, action) => {
  switch(action.type) {
    case FETCH_YELP_REQUEST:
      return {
        isFetching: action.boolean
      }
    case FETCH_YELP_SUCCESS:
      return {
        isFetching: false,
        status: action.response.data.status,
        drink: action.response.data.drink,
        restaurant: action.response.data.restaurant,
        dessert: action.response.data.dessert
      }
    case FETCH_YELP_FAIL:
      return {
        isFetching: false,
        status: action.error.message,
        hasError: true,
      }
    default:
      return state
  }
}

export default yelpData;
