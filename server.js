var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3030;
var app = express();



app.listen(PORT, function () {
    console.log("App now listening on http://localhost:" + PORT);
});