import asyncHandler from 'express-async-handler'
import Response from '../models/response.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getResponse = asyncHandler(async (req, res) => {
  const exams = await Response.find({
    exam: req.params.id1,
    student: req.params.id2,
  })

  res.json(exams)
})
const getAllResponse = asyncHandler(async (req, res) => {
  const exams = await Response.find({
    exam: req.params.id,
  })

  res.json(exams)
})

const addResponse = asyncHandler(async (req, res) => {
  const {
    finalResponse,
    user_id,
    exam_id,
    attempts,
    total,
    obtain,
    name,
    examName,
  } = req.body
  Response.deleteMany({ exam: exam_id, student: user_id })
    .then(function () {
      console.log('Data deleted') // Success
    })
    .catch(function (error) {
      console.log(error) // Failure
    })
  const response = await Response.create({
    exam: exam_id,
    student: user_id,
    attempts: attempts,
    multiple: finalResponse,
    examName,
    total,
    obtain,
    name,
  })

  if (response) {
    res.status(201).json({
      response,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export {
  addResponse,
  getResponse,
  getAllResponse,
}
