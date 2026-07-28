const mongoose = require("mongoose");

const chatSchma = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
        
    },
    message: {
        type: String,
        maxlength: 50,
    },
    created_at:{
        type: Date,
    }
});

const Chat = mongoose.model("Chat", chatSchma);

module.exports = Chat;
 