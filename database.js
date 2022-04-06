const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testAppication").then(()=>{
    console.log("Successfully Connected to Database.");
}).catch((e)=>{console.log(e);})

module.exports = mongoose;