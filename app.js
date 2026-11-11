
require('dotenv').config();

const mongoose = require('mongoose');
const Waterfall = require('./models/waterfall');

const connectionString = process.env.MONGO_CON;

// MongoDB Atlas connection and initial data
async function connectDatabase() {
  if (!connectionString) {
    console.error('MONGO_CON is missing from .env');
    return;
  }

  try {
    await mongoose.connect(connectionString);
    console.log('MongoDB Atlas connected successfully!');

    // Insert initial data only if the collection is empty
    const count = await Waterfall.countDocuments();

    if (count === 0) {
      await Waterfall.insertMany([
        {
          name: 'Niagara Falls',
          country: 'Canada',
          height: 51
        },
        {
          name: 'Angel Falls',
          country: 'Venezuela',
          height: 979
        },
        {
          name: 'Victoria Falls',
          country: 'Zimbabwe',
          height: 108
        }
      ]);

      console.log('Three waterfalls inserted successfully!');
    } else {
      console.log(`Waterfalls already exist: ${count}`);
    }

  } catch (err) {
    console.error('MongoDB connection or seeding error:', err);
  }
}

connectDatabase();

// Express dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var waterfallsRouter = require('./routes/waterfalls');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route handlers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/waterfalls', waterfallsRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
