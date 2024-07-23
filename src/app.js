import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import apiRouter from './routes/api/index.js';
import catalogRouter from './routes/catalog.js';

dotenv.config();

const app = express();

mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

const main = async () => {
  await mongoose.connect(mongoDB);
};

main().catch((err) => console.log(err));

app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use("/catalog", catalogRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export default app;