const express = require("express");
const authController = require("../controllers/auth");
const orderController = require("../controllers/order");
const router = express.Router();
const {authMiddleware} = require("../middlewares/Athenticate");

router.get("/", authMiddleware,orderController.getOrder);

router.post("/post", authMiddleware,orderController.postOrder);

router.patch("/edit", authMiddleware,orderController.editOrder);

module.exports = router;