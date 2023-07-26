import {
    RESPONSE_DETAILS_REQUEST,
    RESPONSE_DETAILS_SUCCESS,
    RESPONSE_DETAILS_FAIL,
    ALL_RESPONSE_DETAILS_REQUEST,
    ALL_RESPONSE_DETAILS_SUCCESS,
    ALL_RESPONSE_DETAILS_FAIL,
  } from '../constants/responseConstants'
  
  export const responseDetailReducer = (state = { response: [] }, action) => {
    switch (action.type) {
      case RESPONSE_DETAILS_REQUEST:
        return { loading: true, response: [] }
      case RESPONSE_DETAILS_SUCCESS:
        return {
          loading: false,
          response: action.payload,
        }
      case RESPONSE_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const allResponseDetailReducer = (state = { response: [] }, action) => {
    switch (action.type) {
      case ALL_RESPONSE_DETAILS_REQUEST:
        return { loading: true, response: [] }
      case ALL_RESPONSE_DETAILS_SUCCESS:
        return {
          loading: false,
          response: action.payload,
        }
      case ALL_RESPONSE_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  