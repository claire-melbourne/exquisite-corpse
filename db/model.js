const mongoose = require('mongoose');
const db = require('./db.js');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: Array,
  storyLines: Array
})
const Story = mongoose.model('Story', storySchema);

module.exports = Story;