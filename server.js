var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.development.config');
var express = require('express');

var app = new express();
var port = 3000;

if (process.env.NODE_ENV !== 'production') {
	var compiler = webpack(config);
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
}

app.use('/assets/img', express.static('assets/img'));
app.use('/assets/fonts', express.static('assets/fonts'));
app.use('/dist', express.static('dist'));

app.use(function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s", port);
    }
});