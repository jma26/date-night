import { FETCH_YELP_SUCCESS, FETCH_YELP_FAIL } from './action_types';
import axios from 'axios';

export const fetchYelpData = (data) => {
  return (dispatch) => {
    return axios.post('/business', data)
    .then(response => {
      dispatch(fetchYelpSuccess(response));
    })
    .catch(error => {
      dispatch(fetchYelpFail(error));
    })
  }
};

export const fetchYelpSuccess = (response) => ({
  type: FETCH_YELP_SUCCESS,
  response
});

export const fetchYelpFail = (error) => ({
  type: FETCH_YELP_FAIL,
  error
})
