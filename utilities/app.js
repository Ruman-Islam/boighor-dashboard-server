const express = require('express');
const cors = require('cors');
const app = express();




// APPLICATION MIDDLEWARE //
app.use(cors());
app.use(express.json());
// ...................... //


app.get("/", (req, res) => {
    res.send("Route is working!");
});


module.exports = app;