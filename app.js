const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
require('./config/mongo.connection');

const boardRouter = require('./routers/boardRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('development'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Listening on 'http://localhost:${PORT}'`);
});

app.use('/board', boardRouter);
