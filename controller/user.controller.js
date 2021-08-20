const express = require("express");

const router = express.Router();

const Order = require('../model/model.OrderCollection');
const User = require('../model/model.userCollection');

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

module.exports.userCollectionGet = (req, res, next) => {
    const users = await User.find();
    const orders = await Order.find();
    var resultArr = [];
    users.forEach(user => {
        var averageBillValue = 0;
        const orderArr = orders.filter((order) => {
            return order.userId == user.userId;
        })

        orderArr.forEach((orderValue) => {
            averageBillValue = averageBillValue + orderValue.subtotal;
        })
        averageBillValue = Math.floor(averageBillValue / orderArr.length());

        resultArr.push({
            userId: user.userId,
            name: user.name,
            orderLength: orderArr,
            averageBillValue: averageBillValue
        });
    });
    res.send();

}
