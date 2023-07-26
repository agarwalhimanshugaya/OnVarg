import axios from 'axios'
import {
  EXAM_LIST_REQUEST,
  EXAM_LIST_SUCCESS,
  EXAM_LIST_FAIL,
  EXAM_DETAILS_REQUEST,
  EXAM_DETAILS_SUCCESS,
  EXAM_DETAILS_FAIL,
} from '../constants/questionConstants'

export const listExams = () => async (dispatch) => {
  try {
    dispatch({ type: EXAM_LIST_REQUEST })

    const { data } = await axios.get(`http://127.0.0.1:5000/question/activexam`)
    // console.log('data', data)
    dispatch({
      type: EXAM_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EXAM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listExamDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXAM_DETAILS_REQUEST })

    const { data } = await axios.get(
      `http://127.0.0.1:5000/question/activexam/${id}`
    )

    dispatch({
      type: EXAM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EXAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const questionDetails = (multi) => async (dispatch) => {
  try {
    dispatch({ type: EXAM_DETAILS_REQUEST })

    const id = multi.id
    const multiple = {
      question: multi.question,
      optionA: multi.optionA,
      optionB: multi.optionB,
      optionC: multi.optionC,
      optionD: multi.optionD,
      answer: multi.answer,
      marks: multi.marks,
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      `http://127.0.0.1:5000/question/setques/${id}`,
      {
        multiple,
      },
      config
    )

    dispatch({
      type: EXAM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: EXAM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

