var express = require('express'),
    path = require('path'),
    exphbs = require('express-handlebars'),
    http = require('http'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    config = require('config'),
    debug = require('debug')('writerxl:server'),
    favicon = require('serve-favicon');

var app = express();

var port = process.env.PORT || '3000';
app.set('port', port);

// Set up the view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.disable('etag');

// Set up the static content directories
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));

// Index Route
app.get('/', routes.index);

// Start the server
var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});