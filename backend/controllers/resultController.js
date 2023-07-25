import asyncHandler from 'express-async-handler'
import Result from '../models/result.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getResults = asyncHandler(async (req, res) => {
  const results = await Result.find({ student: req.params.id })

  res.json(results)
})

const addResult = asyncHandler(async (req, res) => {
  const { result, exam_id, user_id, examName } = req.body
  Result.deleteMany({ exam: exam_id, student: user_id })
    .then(function () {
      console.log('Data deleted') // Success
    })
    .catch(function (error) {
      console.log(error) // Failure
    })
  const finalresult = await Result.create({
    examName,
    exam: exam_id,
    student: user_id,
    score: result[0],
    maxScore: result[1],
  })

  if (result) {
    res.status(201).json({
      finalresult,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export {
  addResult,
  getResults,
}
