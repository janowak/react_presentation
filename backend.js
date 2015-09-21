var express = require('express');
var app = express();

app.get('/rest/call', function (req, res) {
    res.send('test');
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});