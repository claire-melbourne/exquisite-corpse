const controller = require('../db/controller.js');
const getWords = require('../externalRequests/getWords.js');
const getPhoto = require('../externalRequests/getPhoto.js');
const config = require('../config')
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public/dist'));

app.get('/story/:title', (req, res) => {
  let title = req.params.title.split('-').join(' ');
  controller.getStory(title, res);
});

app.get('/recent', (req, res) => {
  controller.getLatest(res);
});


app.post('/title', (req, res) => {
  console.log('your request', req.body)
  controller.createTitle(req, res, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.status(201).send(result);
    }
  });
});

app.put('/addline/:title', (req, res) => {
  let title = req.params.title.split('-').join(' ');
  let text = req.body.line
  getWords(text, (keywords) => {
    getPhoto(keywords, (imgUrl) => {
      controller.addLine(title, text, keywords, imgUrl, (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      });
    });
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));