var express = require('express');
var app = express();
var path = require('path');
var appRoutes = ['/', '/login', '/logout', '/edit*'];
app.get(appRoutes, function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/templates/index.html'));
});

app.use('/static', express.static('public'));
app.use('/static', express.static('node_modules'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});