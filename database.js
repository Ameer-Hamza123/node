const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hamza:qwert159@cluster0.rznbe.mongodb.net/apis").then(()=>{
    console.log("Successfully Connected to Database.");
}).catch((e)=>{console.log(e);})

module.exports = mongoose;
