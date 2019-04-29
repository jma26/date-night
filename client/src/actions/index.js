import { FETCH_YELP_SUCCESS, FETCH_YELP_FAIL, FETCH_YELP_REQUEST } from './action_types';
import axios from 'axios';

export const fetchYelpData = (data) => {
  return (dispatch) => {
    dispatch(fetchYelpRequest(true));
    return axios.post('/business', data)
    .then(response => {
      // Check if status is 200 because both status are sent from server.js 'successfully' from res.send**
      if (response.data.status === 200) {
        dispatch(fetchYelpSuccess(response));
      } else if (response.data.status === 204) {
        console.log(response.data.status);
        throw new Error('Request returned with no content, status code 204');
      }
    })
    .catch(error => {
      console.log(error.name, error.message);
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

export const fetchYelpRequest = (boolean) => ({
  type: FETCH_YELP_REQUEST,
  boolean
})
