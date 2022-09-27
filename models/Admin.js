const mongoose = require('mongoose');


const Admin_Schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    vendor_id: {
        type: String
    },
    imgURL: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    }

}, { timestamps: true });

const Admin = mongoose.model("Admin", Admin_Schema);

module.exports = Admin;