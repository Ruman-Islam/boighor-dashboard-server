const express = require('express');
const postController = require('../../../controller/admin/post.controller');
const router = express.Router();


router
    .route('/add_a_book')
    .post(postController.addABook)

module.exports = router;