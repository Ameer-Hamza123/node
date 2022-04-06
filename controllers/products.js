const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const Product = require("../models/product");

exports.postProduct = async (req, res) => {
    const { title, price, inStock } = req.body;
    const product = new Product({
        title: title,
        price: price,
        inStock: inStock
    })
    await product.save();
    res.send("Product Registered Successfully");
}

exports.editProduct = async (req, res) => {
    const id = req.query.id;    
    const { title, price, inStock } = req.body;
    await Product.updateOne({_id:ObjectId(id)},{ title, price, inStock });
    res.send("Product Updated Successfully");
}

exports.deleteProduct = async (req, res) => {
    const id = req.query.id;
    await Product.deleteOne({_id:ObjectId(id)});
    res.send("Product Deleted Successfully");
}

exports.getProducts = async (req, res) => {
    const products = await Product.findByTitle("Book");
    res.status(200).json(products);
}

exports.getAllProducts = async (req, res) => {
    const products = await Product.findByTitle("Book");
    res.render("Products",{products});
}