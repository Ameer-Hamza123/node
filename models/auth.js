const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        validate: {
            validator: (val) => {
                return val.length > 3;
            },
            message: "fullname is must be greater than 3 words"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (val) => {
                return val.length > 3
            },
            message: "Please Provide a valid email"
        }
    },
    password: {
        type: String,
        required: true,
        validate:{
            validator:(val)=>{
                return val.length >= 8;
            },
            message: "Password must be minimum 8 characters"
        }
    },
    userrole: {
        type: String,
        required: true,
        validate:{
            validator:(val)=>{
                return val.length > 0;
            },
            message: "UserRole is Required"
        }
    },
    orders: [{ type: mongoose.Types.ObjectId, ref: "Order", default: [] }]
});

authSchema.static("findByEmail",function(email){
    return this.find({email});
})

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;