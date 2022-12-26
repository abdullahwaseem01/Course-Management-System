const express = require('express');
const router = express.Router();
const Student = require('../database/models/student');
const Course = require('../database/models/course');
const Teacher = require('../database/models/teacher');


router.post('/loginTeacher', (req, res) => {
    Teacher.find({ email: req.body.email, password: req.body.password }, (err, teacher) => {
        if (err) {
            res.json({ 'error': err });
        } else {
            if(teacher.length > 0){
            res.json({ 'teacher': teacher });
            }else{
                res.json({ 'teacher': 'no' });
            }
        }
    });
});
router.post('/loginStudent', (req, res) => {
    Student.find({ email: req.body.email, password: req.body.password }, (err, student) => {
        if (err) {
            res.json({ 'error': err });
        } else {
            if(student.length > 0){
            res.json({ 'student': student });
            }else{
                res.json({ 'student': 'no' });
            }
        }
    });
});

module.exports = router;