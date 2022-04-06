const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const Auth = require("../models/auth");
const Order = require("../models/order");

exports.postOrder = async (req, res) => {

    const { amount, products } = req.body;
    await Auth.updateOne({email:req.session.user},{$push:{orders:products}});
    const order = new Order({
        amount: amount,
        products: products,
        user:req.session.userid
    })
    await order.save();
    res.status(201).json("Orders Post");
}

exports.editOrder = async (req, res) => {
    const _id = req.query.id;
    console.log(_id)
    const { amount, products } = req.body;
    await Order.updateOne({_id:ObjectId(_id)},{$set:{amount:amount,products:products}});
    res.status(201).json("Order Updated");
}
    
exports.getOrder = async (req, res) => {
    const orders = await Order.find({user:req.session.userid});
    res.status(200).json(orders);
}