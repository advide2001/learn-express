const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    "message": "Adarsh is cool"
  })
})


app.listen(3000);