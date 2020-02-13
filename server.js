// moviedex-api server
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// express app object
const app = express();

// express middleware setup
const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting));
app.use(helmet());
app.use(cors());
app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');
  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request' });
  }
  next();
});
app.use((error, req, res, next) => {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    response = { error };
  }
  res.status(500).json(response);
});

// movie database
const movies = require('./movies-data-small');

// /movie endpoint
// params: genre:'', country:'', avg_vote:#
app.get('/movie', (req, res) => {
  let response = movies;
  const { query = {} } = req;

  if (query.genre) {
    if (typeof query.genre === 'string')
      response = response.filter(m =>
        m.genre.toLowerCase().includes(query.genre.toLowerCase())
      );
    else return res.status(400).json({ error: 'bad genre' });
  }

  if (query.country) {
    if (typeof query.country === 'string')
      response = response.filter(m =>
        m.country.toLowerCase().includes(query.country.toLowerCase())
      );
    else return res.status(400).json({ error: 'bad country' });
  }

  if (query.avg_vote) {
    if (!isNaN(Number(query.avg_vote)))
      response = response.filter(
        m => Number(m.avg_vote) >= Number(query.avg_vote)
      );
    else return res.status(400).json({ error: 'bad avg_vote' });
  }

  res.json(response);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
