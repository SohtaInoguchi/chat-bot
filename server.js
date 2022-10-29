const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
const port = process.env.PORT || 5000;
const nlpStarter = require("./index");
console.log("nlpStart???", nlpStarter);

app.get('/response', (req, res) => {
  console.log("in get response");
  res.send('Hello');
})

app.listen(port, () => {
  nlpStarter();
  console.log(`App listening port ${port}`);
})