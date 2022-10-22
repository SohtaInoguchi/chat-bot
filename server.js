const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const nlpStarter = require("./index");
console.log("nlpStart???", nlpStarter);
app.listen(port, () => {
  nlpStarter();
  console.log(`App listening port ${port}`);
})