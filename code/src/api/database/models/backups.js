const mongoose = require('mongoose');

const BackupSchema = new mongoose.Schema({ 
    Teacher: String,
    Student: String,
    Course: String

});

module.exports = mongoose.model('Backup', BackupSchema);