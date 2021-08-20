const express = require('express');

router = express.Router();

const Order = require('../model/model.OrderCollection');
const User_r = require('../model/model.userCollection');
const orderController = require('../controller/order.controller');

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/orderCollection', orderController.orderGet);
router.post('/orderCollection', orderController.orderPost);

router.put('/orderCollection/:user_id', orderController.orderPut);


router.delete('/orderCollection/:user_id', orderController.orderDelete)

module.exports = router;
