const express = require("express");
const app = express();
const { mongoose } = require("./database");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

app.use(session({
    secret: process.env.NAME,
    resave: false,
    saveUninitialized: false
}))

app.use((req, res,next) => {
    console.log(req.url);
    next();
})

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "assets")));

app.set("view engine", "ejs");

app.set("views", "views");

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    if(req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
})


const usersRouter = require("./routes/auth");
const ordersRouter = require("./routes/order");
const productsRouter = require("./routes/products");

app.use("/app/welcome", (req,res)=>{
    res.sendFile(path.join(__dirname,"views", '/index.html'));
});

app.use("/users", usersRouter);

app.use("/orders", ordersRouter);

app.use("/products", productsRouter);

app.use((req,res)=>{
    res.render("error")
})

app.listen(3000);