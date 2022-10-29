const express = require("express");
const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const nlpStarter = require("./index");
console.log("nlpStart???", nlpStarter);

app.post('/response', (req, res) => {
  console.log("req body", req.body);
  console.log("in get response!!!");
  res.send('Hello');
})

app.listen(port, () => {
  nlpStarter();
  console.log(`App listening port ${port}`);
})