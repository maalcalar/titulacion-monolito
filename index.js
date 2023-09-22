const express = require('express');

const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
  res.send('Hello Miguel');
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});