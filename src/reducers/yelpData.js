import { FETCH_YELP_DATA } from '../actions/action_types';

const yelpData = (state = {}, action) => {
  switch(action.type) {
    case FETCH_YELP_DATA:
      return {
        ...action.data
      }
    default:
      return state
  }
}

export default yelpData;
