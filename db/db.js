const mongoose = require('mongoose');
const config = require('../config');
const dbURI = config.DB_URI;

const db = mongoose.connect(dbURI);

module.exports = db;