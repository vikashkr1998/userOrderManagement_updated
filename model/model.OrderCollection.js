const mongoose = require("mongoose");

const User = require('./model.userCollection');

const UserOrderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true,
        unique: true
    },
    userId: {
        type: Number,
        ref: 'User'
    },
    subtotal: {
        type: Number,
        required: [true, 'subtotal is required']
    },
    date: {
        type: Date,
        default: Date

    }
})

module.exports = mongoose.model('OrderCollection', UserOrderSchema);
