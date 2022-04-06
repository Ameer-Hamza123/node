const Auth = require("../models/auth");
const bcrypt = require("bcrypt");

exports.postAuthSignUp = async (req, res) => {

        let { fullname, email, password,userrole } = req.body;
        password = await bcrypt.hash(req.body.password, 12);

        const auth = new Auth({
            fullname: fullname,
            email: email,
            password: password,
            userrole:userrole
        })
        await auth.save();
    res.status(201).json("User Registered Successfully");
}

exports.postAuthSignIn = async (req, res) => {
    try {   
        const { email, password } = req.body;
        const user = await Auth.findByEmail(email);
        console.log(user);
        const result = await bcrypt.compare(password, user[0].password);
        if (result) {
            req.session.user = email;
            req.session.userrole = user[0].userrole;
            req.session.userid = user[0]._id;
            res.send("Sign In Successfully");
        } else {
            res.send("Incorrect Email or Password");
        }
    }catch(e){
        res.send(e);
    }
}