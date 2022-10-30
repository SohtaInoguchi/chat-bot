const express = require("express");
const app = express();
const cors = require('cors');
const nlp = require("./index");
nlp.addUttreranceAndIntent();
nlp.train();
// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.post('/response', async (req, res) => {
  console.log("req body", req.body);
  const response = await nlp.get().process(req.body.responseMessage);
  res.send(response);
})

app.listen(port, () => {
  console.log(`App listening port ${port}`);
})