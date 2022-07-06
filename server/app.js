require('dotenv').config();
// Express service
const express = require('express');
const app = express();
// General Parameters for express
const port = process.env.PORT || 8080;
const cors = require('cors');
// Routes' imports
const path = require('path');
const cookieParser = require('cookie-parser');


// Routes imports
const mailRoutes = require('./routes/mail');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: ['http://localhost:3000', 'https://ariellabs-6ef23.web.app/'],
}))

// Format responses and requests to json
app.use(express.json());

// Express use routes as middleware
app.use('/mails', mailRoutes);

app.get('/', (req, res) => {
  res.send(`
  <h1 style="text-align: center; font: 32px 'Lucida Grande', Arial, sans-serif;"> Up and Running </h1>
  <img src="/images/google_analytics.png" alt="Up and Running"></img>
  `);
});

app.listen(port, () => {
  console.log('Server is up and running');
});

module.exports = app;
