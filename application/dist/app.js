"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Julia ist die BESTE!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=app.js.map