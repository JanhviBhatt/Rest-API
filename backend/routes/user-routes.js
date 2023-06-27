const express = require('express')
const getAllUser = require('../controllers/getAllUser')
const signup = require('../controllers/signup')
const login = require('../controllers/login')


const router = express.Router();

router.get("/",getAllUser)
router.post("/signup",signup)
router.post("/login",login)
module.exports = router     