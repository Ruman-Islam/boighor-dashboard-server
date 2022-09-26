const express = require('express');
const getController = require('../../../controller/admin/get.controller');
const router = express.Router();


router
    .route('/is-exists')
    .get(getController.isLogin)

router
    .route('/is-admin')
    .get(getController.isAdmin)

router
    .route('/get-admin')
    .get(getController.findAdminOrVendor)

router
    .route('/all-orders')
    .get(getController.allOrders)

router
    .route('/find-a-customer-order')
    .get(getController.findACustomerOrders)

router
    .route('/find-all-books')
    .get(getController.findAllBooks)

router
    .route('/find-vendor-books')
    .get(getController.findVendorBooks)

router
    .route('/find-a-book')
    .get(getController.findABook)

module.exports = router;