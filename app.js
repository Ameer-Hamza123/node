const express = require("express");
const app = express();
const { mongoose } = require("./db");
const session = require('express-session');
const apiRoute = require("./routes/api");
const bodyParser = require("body-parser");


console.log(process.env.SECRET);

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false })); // x-www-form-urlencode
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    console.log(req.url);
    //res.send("Hello");
    next();
})


app.use("/api", apiRoute);

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
