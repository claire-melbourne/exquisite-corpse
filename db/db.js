const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/stories';
const db = mongoose.connect(dbURI);

module.exports = db;