const express = require("express");

const router = express.Router();

const Order = require('../model/model.OrderCollection');
const User = require('../model/model.userCollection');
const userController = require

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/userCollection',)

router.post('/userCollection', async (req, res) => {
    try {
        const users = await User.find();
        const orders = await Order.find();
        users.forEach(async (user) => {
            const orderArr = orders.filter((order) => {
                return order.userId == user.userId;
            });
            const result = await User.updateOne(
                { userId: user.userId },
                {
                    $set: {
                        noOfOrders: orderArr.length,
                    },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        });

        res.json({ success: true, message: 'Successfully Updated' });
    } catch (error) {
        console.log('error', error);
        res.json({ message: error });
    }
});

router.put('/userCollection/:user_id', (req, res, next) => {
    User.findOneAndUpdate(
        { userId: req.params.user_id }, {
        $set: {
            userId: req.body.userId,
            name: req.body.name
        }
    }
    ).then((result) => {
        console.log('value updated');
        res.json({ "status": "True" });
    }).catch((err) => {
        console.log(err);
        res.send('not updated')
    });
})

router.delete('/userCollection/:user_id', (req, res, next) => {
    User.deleteOne({ userId: req.params.user_id })
        .then((result) => {
            console.log(`userId: ${req.params.user_id} deleted`);
            res.send('item deleted');
        }).catch((err) => {
            console.log(err);
            res.send(err);
        });
})



module.exports = router;
