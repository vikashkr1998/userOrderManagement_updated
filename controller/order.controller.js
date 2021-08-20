const express = require('express');


const Order = require('../model/model.OrderCollection');
const User_r = require('../model/model.userCollection');

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

module.exports.orderGet = (req, res, next) => {
    console.log('order get request');
    res.send('get request');

}

module.exports.orderPost = (req, res, next) => {
    var user_id = req.body.objectId;
    User_r.find({ _id: user_id }).then(user => {
        const myData = new Order(req.body);
        myData.save().then((result) => {
            console.log('data added');
            res.send('data added into table');
        }).catch((err) => {
            console.log(err);
            res.send(err);


        });
    }).catch(err => {
        console.log("objectId not available");
        res.send("not available");
    })
}

module.exports.orderPut = (req, res, next) => {
    Order.findOneAndUpdate(
        { userId: req.params.user_id }, {
        $set: {
            userId: req.body.userId,
            orderId: req.body.orderId,
            subtotal: req.body.subtotal
        }
    }
    ).then((result) => {
        console.log('value updated');
        res.json({ "status": "True" });
    }).catch((err) => {
        console.log(err);
        res.send('not updated')
    });
}

module.exports.orderDelete = (req, res, next) => {
    Order.deleteOne({ userId: req.params.user_id })
        .then((result) => {
            console.log(`userId: ${req.params.user_id} deleted`);
            res.send('item deleted');
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
}
