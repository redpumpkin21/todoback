require('custom-env').env(true)

const PORT = process.env.PORT

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const db = mongoose.connection

const app = express()

app.use(cors())
app.use(express.json())
app.use(moragn('tiny'))
mongoose.connect('')