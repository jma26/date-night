import { FETCH_YELP_DATA } from './action_types';

export const fetchYelpData = (data) => ({
  type: FETCH_YELP_DATA,
  data,
})
