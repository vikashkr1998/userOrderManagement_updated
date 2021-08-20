const mongoose = require("mongoose");

//const schema = mongoose.Schema;

const UserCollectionSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: [true, 'user name required']
    },
    noOfOrders: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('UserCollection', UserCollectionSchema);
