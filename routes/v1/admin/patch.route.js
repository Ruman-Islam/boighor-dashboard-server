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

router
    .route('/update_a_book')
    .patch(patchController.updateABook)

router
    .route('/delete_a_book')
    .patch(patchController.deleteABook)

router
    .route('/delete_admin')
    .patch(patchController.deleteAdmin)

router
    .route('/delete_vendor')
    .patch(patchController.deleteVendor)
module.exports = router;