const express = require("express");
const productController = require("../controllers/products")
const router = express.Router();
const { authMiddleware } = require("../middlewares/Athenticate");
const {userroleMiddleware} = require("../middlewares/userrole");

router.get("/list", productController.getAllProducts);

router.get("/", productController.getProducts);

router.post("/add", authMiddleware,userroleMiddleware, productController.postProduct);

router.patch("/edit", authMiddleware,userroleMiddleware, productController.editProduct);

router.delete("/delete", authMiddleware,userroleMiddleware, productController.deleteProduct);

module.exports = router;