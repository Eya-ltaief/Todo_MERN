const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
    text : {type: String, required: true},
    priority : {type: String, required: true},
    completed : {type: Boolean, required: true},
    date: { type: Date}

}, {
    timestamps: true

})

const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo