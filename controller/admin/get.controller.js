const Admin = require('../../models/Admin');
const Order = require('../../models/Order');
const Book = require('../../models/Book');
const User = require('../../models/User');
const Report = require('../../models/Report');


module.exports.isLogin = async (req, res, next) => {
    try {
        const email = req.query.email;
        const result = await Admin.findOne({ email: email });

        if (!result) {
            return res.status(404).json({
                "result": "No user found"
            })
        }
        return res.status(200).json({
            "result": true
        })
    } catch (error) {
        return res.status(500).json({
            "result": "something went wrong"
        })
    }
}

module.exports.isAdmin = async (req, res, next) => {
    try {
        const email = req.query.email;
        const result = await Admin.findOne({ email: email });
        const admin = result.role;
        res.send(admin)
    } catch (error) {
        res.send("something went wrong");
    }
}


module.exports.findAdminOrVendor = async (req, res, next) => {
    try {
        const email = req.query.email;
        const result = await Admin.findOne({ email: email });
        res.send(result)
    } catch (error) {

    }
}


module.exports.allOrders = async (req, res, next) => {
    try {
        const result = await Order.find({});
        if (result.length <= 0) {
            return res.status(404).json({
                "result": "No result found"
            })
        }
        return res.status(200).json({
            "result": result
        })
    } catch (error) {
        return res.status(500).json({
            "result": "something went wrong"
        })
    }
}

module.exports.findACustomerOrders = async (req, res, next) => {
    try {
        const email = req.query.email;
        const result = await Order.findOne({ email: email });
        const orders = result.orders;
        return res.status(200).json({
            "result": orders
        })
    } catch (error) {
        return res.status(500).json({
            "result": "something went wrong"
        })
    }
}


module.exports.findAllBooks = async (req, res, next) => {
    try {
        const result = await Book.find({})
        if (result.length <= 0) {
            return res.status(404).json({
                "result": "No data found"
            })
        }
        return res.status(200).json({
            "result": result
        })

    } catch (error) {
        return res.status(404).json({
            "result": "something went wrong"
        })
    }
}


module.exports.findVendorBooks = async (req, res, next) => {
    try {
        const vendor_id = req.query.vendor_id;
        const result = await Book.find({ vendor_id: vendor_id })
        if (result.length <= 0) {
            return res.status(404).json({
                "result": "No data found"
            })
        }
        return res.status(200).json({
            "result": result
        })

    } catch (error) {
        return res.status(404).json({
            "result": "something went wrong"
        })
    }
}


module.exports.findABook = async (req, res, next) => {
    try {
        const id = req.query.id;
        const result = await Book.findOne({ _id: id })
        if (!result) {
            return res.status(500).json({
                "result": "something went wrong"
            })
        }
        return res.status(200).json({
            "result": result
        })
    } catch (error) {
        return res.status(404).json({
            "result": "something went wrong"
        })
    }
}


module.exports.getAllAdmin = async (req, res, next) => {
    try {
        const result = await Admin.find({ role: { $in: ["admin", "super-admin"] } });
        res.send(result)
    } catch (error) {

    }
}


module.exports.getAllVendor = async (req, res, next) => {
    try {
        const result = await Admin.find({ role: { $in: ["vendor"] } });
        res.send(result)
    } catch (error) {

    }
}


module.exports.getAllCustomer = async (req, res, next) => {
    try {
        const result = await User.find({});
        res.send(result)
    } catch (error) {

    }
}

module.exports.getAllReport = async (req, res, next) => {
    try {
        const result = await Report.find({});
        res.send(result)
    } catch (error) {

    }
}