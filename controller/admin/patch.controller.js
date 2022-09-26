const Admin = require('../../models/Admin');
const Order = require('../../models/Order');

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