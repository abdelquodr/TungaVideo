const express = require('express');

const router = express.Router();

const courseController = require('../controller/courseController');

router.get('/courses', courseController.getCourseController);

module.exports = router;