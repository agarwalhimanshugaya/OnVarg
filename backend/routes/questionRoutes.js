import express from 'express'
const router = express.Router()
import {
  registerExam,
  getExam,
  getExamById,
  setQues,
  deleteExam,
} from '../controllers/questionController.js'

router.route('/').post(registerExam)
router.route('/setques/:id').post(setQues)
router.route('/activexam').get(getExam)
router.route('/activexam/:id').get(getExamById)

router
  .route('/:id')
  .delete(deleteExam)

export default router
