import asyncHandler from 'express-async-handler'
import Exam from '../models/questionModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getExams = asyncHandler(async (req, res) => {
  const exams = await Exam.find({})

  res.json(exams)
})

export {
  getProducts,
}
