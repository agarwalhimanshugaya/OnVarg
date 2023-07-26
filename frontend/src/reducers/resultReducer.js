import {
    RESULT_DETAILS_REQUEST,
    RESULT_DETAILS_SUCCESS,
    RESULT_DETAILS_FAIL,
  } from '../constants/resultConstants'
  
  export const resultDetailReducer = (state = { results: [] }, action) => {
    switch (action.type) {
      case RESULT_DETAILS_REQUEST:
        return { loading: true, results: [] }
      case RESULT_DETAILS_SUCCESS:
        return {
          loading: false,
          results: action.payload,
        }
      case RESULT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  