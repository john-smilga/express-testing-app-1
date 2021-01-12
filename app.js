const { log } = require('console');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('welcome to our app on port 3000');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
