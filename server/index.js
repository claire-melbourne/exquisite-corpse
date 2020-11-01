const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public/dist'));

// app.get('/', (req, res) => {
//   res.send('lets write a story')
// })
app.post('/title', (req, res) => {
  console.log("request", req.body);
  res.send(req.body.title)
})
app.post('/addline', (req, res) => {
  console.log("request", req.body);
  res.send(req.body.line)
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));