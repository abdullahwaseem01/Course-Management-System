const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({ 
    fName: String,
    studentId: String,
    lName: String,
    email: String,
    password: String,
    courses: String
});

module.exports = mongoose.model('Student', StudentSchema);