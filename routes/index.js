const express = require('express');
const router = express.Router();
const controller = require("../controller/indexController")


/* GET home page. */
router.get('/', controller.home);

module.exports = router;
