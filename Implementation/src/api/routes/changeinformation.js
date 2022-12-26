const express = require('express');
const router = express.Router();
const Student = require('../database/models/student');
const Course = require('../database/models/course');
const Teacher = require('../database/models/teacher');

router.post('/changePassword', (req, res) => {
    Student.findOneAndUpdate({ email: req.body.email, password: req.body.currentPassword  }, { password: req.body.newPassword }, (err, student) => {
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