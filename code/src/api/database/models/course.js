const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({ 
    courseName: String,
    courseCode: String,
    courseDescription: String,
    courseTeacher: String,
    courseStudents: String,
    fileUploadSize:{
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Course', CourseSchema);


