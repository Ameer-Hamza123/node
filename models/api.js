const {mongoose} = require("mongoose");
const {Schema} = mongoose;

const apiSchema = new Schema({
    name:String
});

const Api = mongoose.model('Api',apiSchema);

const signUpSchema = new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
});

signUpSchema.static("findByTitle", function (title) {
    console.log(title)
    if (title == undefined) {
        return this.find();
    }else{
        return this.find({title});
    }
});
const Signup = mongoose.model('SignUp',signUpSchema);
module.exports = {Api,Signup};