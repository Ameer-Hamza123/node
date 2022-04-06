const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: (val) => {
                return val.length > 0
            },
            message: "Title can not be empty"
        }
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: (val) => {
                return val> 0
            },
            message: "Price must be greater than 0"
        }
    },
    inStock: { 
        type: Boolean,
        required: true,
        validate: {
            validator:(val)=>{
                if (val == true || val == false)
                return val ;
            },
            message:"Please provide inStock true or false"
        } }
});

productSchema.static("findByTitle",function(title){
    return this.find({title});
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;