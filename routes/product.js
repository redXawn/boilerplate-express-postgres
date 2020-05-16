const router = require('express').Router()
const productController = require('../controller/product');

router.get('/all', productController.getProduct)

module.exports = router;
