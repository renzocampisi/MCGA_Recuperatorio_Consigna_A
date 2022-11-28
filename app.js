const express = require('express');
const { userRouter } = require('./src/routes/userRoutes');
const cors = require('cors')


const app = express();

app.use(cors())

app.use(express.json())


app.use('/api/v1/users', userRouter )


module.exports = { app }