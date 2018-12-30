let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let resultsRouter = require('./routes/results');

let Result = require('./models/result');
let Places = require('./models/places');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mongoose part
mongoose.connect('mongodb://localhost/test');



// Zapisywanie do bazy kolekcji Cities

let placesList = new Places({
    cityName: 'Miasto testowe 3',
    cityGoogleID: '0003',
    placeName: 'Dwudziesta druga lokalizacja w mieście!',
    placeDescription: 'Lokalizacja dwudziesta druga, miasto to samo co w trzeciej',
    placePrice: 2200,
    placeCurrency: 'pln',
    placeID: '0022.22',
    placePhotos: 'Ścieżka do zdj 22',
    placeUser: 'Nazwa właściciela 22',
    placeMap: 'Dane do mapy 22'

});
console.log('Test 1');
/*
 placesList.save(function (err) {
    if (err) return console.log('Tutaj mamy błąd'); //handleError(err);
    return console.log('Zapisane!');
 });
*/
// Koniec zapisu do bazy

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/results', resultsRouter);
// my extra code





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
