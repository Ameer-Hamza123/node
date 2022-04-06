const express = require("express");

const router = express.Router();
const apiController = require("../controllers/api"); 

router.get("/",apiController.getApi);

router.post("/post",apiController.postApi);

router.post("/signUp",apiController.signUpApi);

module.exports = router;