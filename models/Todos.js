const mongoose = require('mongoose')
const { Schema } = mongoose
const { model } = mongoose

const todoSchema = new Schema(
    {
        title: String,
        description: String
    },
    {timestamps: true}
)

const Todo = model('Todo', todoSchema)

module.exports = Todo