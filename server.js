require('dotenv').config()

const PORT = process.env.PORT

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('./db/connection')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


const todoRouter = require ('./controllers/Todo')

app.get('/', (req, res) => res.send('Server is working'))
app.use('/todo', todoRouter)


app.listen(PORT, () => console.log(`listening on por ${PORT}`))