const express = require('express');
const cors = require('cors');
const app = express();


// IMPORTING APPLICATION ROUTES
const admin_patch_routes = require('../routes/v1/admin/patch.route');
const admin_get_routes = require('../routes/v1/admin/get.route');
const admin_post_routes = require('../routes/v1/admin/post.route');

// APPLICATION MIDDLEWARE //
app.use(cors());
app.use(express.json());
// ...................... //


app.get("/", (req, res) => {
    res.send("Route is working!");
});


// APPLICATION ROUTES //
app.use('/api/v1/admin',
    admin_patch_routes,
    admin_get_routes,
    admin_post_routes,
);


module.exports = app;