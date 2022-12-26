const express = require('express');
const router = express.Router();
const Student = require('../database/models/student');
const Course = require('../database/models/course');
const Teacher = require('../database/models/teacher');

router.post('/registerStudent', (req, res) => {
    newStudent = new Student({
        fName: req.body.fName,
        studentId: req.body.studentId,
        lName: req.body.lName,
        email: req.body.email,
        password: req.body.password
    });
    newStudent.save((err, student) => {
        if (err) {
            res.json({ 'error': err });
        } else {
            res.json({ 'student': student });
        }
    });

});

router.post('/registerTeacher', (req, res) => {
    newTeacher = new Teacher({
        teacherId: req.body.teacherId,
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        password: req.body.password
    });
    newTeacher.save((err, teacher) => {
        if (err) {
            res.json({ 'error': err });
        } else {
            res.json({ 'teacher': teacher });
        }
    });

});

router.post('/createCourse', (req, res) => {
    newCourse = new Course({
        courseName: req.body.courseName,
        courseCode: req.body.courseCode,
        courseDescription: req.body.courseDescription,
        courseTeacher: req.body.courseTeacher,
        courseStudents: req.body.courseStudents
    });
    newCourse.save((err, course) => {
        if (err) {
            res.json({ 'error': err });
        } else {
            res.json({ 'courses': course });
        }
    });

});

module.exports = router;