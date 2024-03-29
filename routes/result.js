const express = require('express')
const auth = require('../middleware/auth')
const router = express.Router()
const {Result, validationSchemaQuizResult} = require('../models/QuizResult.model')
router.get('/',auth, async (req, res)=>{
    const result = await Result.find()
    // throw new Error('Success error reporting')
    return res.status(200).send(result)
})

module.exports = router