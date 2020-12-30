const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from node', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.send('Post was successful!');
});

const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
