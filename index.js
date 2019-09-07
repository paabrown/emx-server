require('dotenv').config();

const express = require('express');

const app = express();

console.log('process.env.PORT', process.env.PORT)

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}!`));

app.get('/', (req, res) => {
  console.log('GET /');
  res.send('hello world!');
})
