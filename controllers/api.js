const {Api, Signup} = require("../models/api");
const bcrypt = require("bcrypt");

exports.getApi = async (req,res) => {
    const data =  await Signup.findByTitle();
    res.send(data);
}

exports.postApi = (req,res) =>{
    const {name} = req.body;
    const api = Api({
        name:name
    })
    api.save();
    res.send("Ok");
}

exports.signUpApi = async (req,res) =>{
    let {name,email,password} = req.body;
    password = await bcrypt.hash(password,12);
    const api = Signup({
        name:name,
        email:email,
        password:password
    })
    api.save();
    res.send("Ok");
}

