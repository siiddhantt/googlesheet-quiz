const cors = require('cors');
const express = require('express');
const axios = require('axios');
const connectToMongo = require('./db');
connectToMongo();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/quiz', require('./routes/quiz'));

app.get('/', async (req, res) => {
  res.send("Backend running successfully!");
});

setInterval(() => {
  console.log("Quiz updated after 1 hour!")
  // Make GET Request on every 2 second
  axios.get(`http://localhost:5000/api/quiz/updatequiz`).catch(error => console.log('Error to fetch data\n'))
}, 3600000);

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
});