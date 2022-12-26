const express = require('express');
const router = express.Router();
const Student = require('../database/models/student');
const Course = require('../database/models/course');
const Teacher = require('../database/models/teacher');
const Backup = require('../database/models/backups');
const mongoose = require('mongoose');

router.post('/backup' , (req, res) => {
    Student.find({}, (err, students) => {
        Course.find({}, (err, courses) => {
            Teacher.find({}, (err, teachers) => {
                const backup = new Backup({
                    students: students,
                    courses: courses,
                    teachers: teachers
                });
                backup.save((err, backup) => {
                    if (err) {
                        res.json({ 'error': err });
                    } else {
                        res.json({ 'backup': backup });
                    }
                });
            });
        });
    });
});

module.exports = router;