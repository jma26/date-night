import { FETCH_YELP_SUCCESS, FETCH_YELP_FAIL } from '../actions/action_types';

const yelpData = (state = {}, action) => {
  switch(action.type) {
    case FETCH_YELP_SUCCESS:
      return {
        status: action.response.status,
        response: action.response.data,
      }
    case FETCH_YELP_FAIL:
      return {
        status: action.error.response.status,
        hasError: true,
      }
    default:
      return state
  }
}

export default yelpData;
