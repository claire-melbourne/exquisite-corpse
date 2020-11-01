const mongoose = require('mongoose');
const Story = require('./model.js');

module.exports = {
  createTitle: (storyTitle, res) => {
    Story.create({title: storyTitle}, (err, response) => {
      if (err) {
        console.log(err);
        res.status(400).end();
      } else {
        console.log(response);
        res.status(201).send('story saved')
      }
    })
  }
}