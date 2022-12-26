const express = require('express');
const router = express.Router();
const Student = require('../database/models/student');
const Course = require('../database/models/course');
const Teacher = require('../database/models/teacher');

router.get('/viewCourses', (req, res) => {
    Course.find({courseCode: req.body.courseCode}, (err, courses) => {
        if (err) {
            res.json({ 'error': err });
        } else {
            res.json({ 'courses': courses });
        }
    });
});

router.get('/getStudent', (req, res) => {
    Student.find({ email : req.body.email }, (err, student) => {
        if (err) {
            res.json({ 'error': err });
        } else {
            res.json({ 'student': student });
        }
    });
});

module.exports = router;