var express  = require('express')
    , app    = express()
    , server = require('http').createServer(app)
    , io     = require('socket.io').listen(server)
    , connect = require('connect')
    , pg     = require('pg')
    , Client = pg.Client;

// Setup express middleware
app.use(express.static('public'));
app.use(connect.logger());

// Start the server
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080  
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
server.listen(port, ip);

