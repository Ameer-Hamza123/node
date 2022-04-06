const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    amount: {
        type: Number, require: true,
        validate: {
            validator: (val) => {
                return val > 0
            },
            message: "Amount must be greater than 0"
        }
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        }
    ],
    user:{
        type: mongoose.Types.ObjectId,
        ref: "Auth"
    }
});

orderSchema.static("findByTitle",function(){
    return this.find();
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;