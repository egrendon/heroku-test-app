const express = require('express');
const app = express();
const path = require('path');

//Use Dist folder
app.use(express.static(__dirname + '/dist'));

const portNumber = process.env.PORT || 8080;

app.listen(portNumber, function () {
    console.log('Node Server.js Listening on port ' + listener.address().port); //Listening on port 8888
});

//PathLocationStrategy
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


