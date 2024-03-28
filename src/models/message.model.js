const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        require: true,
    }
})

const MessageModel = mongoose.model("message", messageSchema);

module.exports = MessageModel;