const express = require('express');
const fs = require('fs');

const app = express();

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello from node', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('Post was successful!');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
