import {
    EXAM_LIST_REQUEST,
    EXAM_LIST_SUCCESS,
    EXAM_LIST_FAIL,
    EXAM_DETAILS_REQUEST,
    EXAM_DETAILS_SUCCESS,
    EXAM_DETAILS_FAIL,
  } from '../constants/questionConstants'
  
  export const examListReducer = (state = { exams: [] }, action) => {
    switch (action.type) {
      case EXAM_LIST_REQUEST:
        return { loading: true, exams: [] }
      case EXAM_LIST_SUCCESS:
        return {
          loading: false,
          exams: action.payload,
        }
      case EXAM_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const questionDetailsReducer = (state = { exam1: [] }, action) => {
    switch (action.type) {
      case EXAM_LIST_REQUEST:
        return { loading1: true, exam1: [] }
      case EXAM_LIST_SUCCESS:
        return {
          loading1: false,
          exam1: action.payload,
        }
      case EXAM_LIST_FAIL:
        return { loading1: false, error1: action.payload }
      default:
        return state
    }
  }
  
  export const examDetailsReducer = (state = { exam: {} }, action) => {
    switch (action.type) {
      case EXAM_DETAILS_REQUEST:
        return { ...state, loading: true }
      case EXAM_DETAILS_SUCCESS:
        return { loading: false, exam: action.payload }
      case EXAM_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  
  