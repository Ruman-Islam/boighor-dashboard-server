const express = require('express');
const patchController = require('../../../controller/admin/patch.controller');
const router = express.Router();


router
    .route('/login')
    .patch(patchController.loginAdmin)

router
    .route('/update_order_confirmation')
    .patch(patchController.updateOrderConfirmation)

router
    .route('/update_order_delivery')
    .patch(patchController.updateOrderDeliveryStatus)

module.exports = router;