const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({ 
    fname: String,
    lname: String,
    teacherId: String,
    email: String,
    password: String,
    courses: String

});

module.exports = mongoose.model('Teacher', TeacherSchema);