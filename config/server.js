var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var expressLayouts = require('express-ejs-layouts');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressLayouts);
app.use(expressValidator());
app.use(expressSession({
	secret: 'ljcq4b2tok8mxp7uz7vf8amj',
	resave: false,
	saveUninitialized: false
}));

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;