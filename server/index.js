const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/../public/dist'))
app.get('/', (req, res) => {
  res.send('lets write a story')
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));