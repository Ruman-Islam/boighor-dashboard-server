const Admin = require('../../models/Admin');
const Order = require('../../models/Order');
const Book = require('../../models/Book');

module.exports.loginAdmin = async (req, res, next) => {

    try {
        const email = req.query.email;
        const password = req.query.password;

        const result = await Admin.updateOne(
            { $and: [{ email: email }, { password: password }] },
            { $set: { login_session: true } }
        )

        if (result.modifiedCount > 0 && result.matchedCount > 0) {
            return res.status(200).json({
                "result": "Login successful"
            })
        }

        return res.status(404).json({
            "result": "Email or password is wrong"
        })

    } catch (error) {
        return res.status(500).json({
            "result": "something went wrong"
        })

    }
};


module.exports.updateOrderConfirmation = async (req, res, next) => {
    try {
        const email = req.query.email;
        const order_id = req.query.order_id;
        const status = req.query.status;
        const result = await Order.findOne({ email: email })

        if (!result) {
            return res.status(500).json({
                "result": "something went wrong"
            })
        }

        const { orders } = result;
        let new_orders = [];
        for (const order of orders) {
            if (order.order_id === +order_id) {
                order.confirmation_status = status;
                new_orders.push(order)
            } else {
                new_orders.push(order)
            }
        }

        await Order.updateOne({ email: email }, { $set: { orders: new_orders } })
        return res.status(200).json({
            "result": "Status updated"
        })

    } catch (error) {
        return res.status(500).json({
            "result": "something went wrong"
        })
    }
}



module.exports.updateOrderDeliveryStatus = async (req, res, next) => {
    try {
        const email = req.query.email;
        const order_id = req.query.order_id;
        const status = req.query.status;
        const result = await Order.findOne({ email: email })

        if (!result) {
            return res.status(500).json({
                "result": "something went wrong"
            })
        }

        const { orders } = result;
        let new_orders = [];
        for (const order of orders) {
            if (order.order_id === +order_id) {
                order.delivery_status = status;
                new_orders.push(order)
            } else {
                new_orders.push(order)
            }
        }

        await Order.updateOne({ email: email }, { $set: { orders: new_orders } })
        return res.status(200).json({
            "result": "Status updated"
        })

    } catch (error) {
        return res.status(500).json({
            "result": "something went wrong"
        })
    }
}


module.exports.updateABook = async (req, res, next) => {
    try {
        const update_book = req.body;
        const id = req.body._id;
        const result = await Book.updateOne({ _id: id }, { $set: update_book })

        if (result.modifiedCount > 0 && result.matchedCount > 0) {
            return res.status(200).json({
                "result": req.body
            })
        }
        return res.status(500).json({
            "result": "Internal server error"
        })

    } catch (error) {
        return res.status(500).json({
            "result": "Internal server error"
        })
    }
}


module.exports.deleteABook = async (req, res, next) => {
    try {
        const id = req.query.id;
        const result = await Book.deleteOne({ _id: id })

        if (result.deletedCount > 0) {
            return res.status(200).json({
                "result": "Deleted successfully"
            })
        }
        return res.status(500).json({
            "result": "Internal server error"
        })

    } catch (error) {
        return res.status(500).json({
            "result": "Internal server error"
        })
    }
}


module.exports.deleteAdmin = async (req, res, next) => {
    try {
        const id = req.query.id;
        const email = req.query.email;
        const isSuperAdmin = await Admin.findOne({ _id: id });
        if (isSuperAdmin.role === 'super-admin') {
            return res.status(401).json({
                "result": "You cannot remove Super Admin"
            })
        } else {
            const result = await Admin.deleteOne({ _id: id })
            if (result.deletedCount > 0) {
                return res.status(200).json({
                    "result": "Admin removed"
                })
            }
        }
    } catch (error) {
        return res.status(500).json({
            "result": "Internal server error"
        })
    }
}


module.exports.deleteVendor = async (req, res, next) => {
    try {
        const id = req.query.id;
        const result = await Admin.deleteOne({ _id: id })
        if (result.deletedCount > 0) {
            return res.status(200).json({
                "result": "Vendor removed"
            })
        }

    } catch (error) {
        return res.status(500).json({
            "result": "Internal server error"
        })
    }
}