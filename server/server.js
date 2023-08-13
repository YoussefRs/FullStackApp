const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const fileUpload = require('express-fileupload');
const errorMiddleware = require('./middleswares/error');
const authRoute = require('./routes/authRoutes');

const app = express();

//config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true }));
// app.use(fileUpload());

app.use('/api/user', authRoute);




app.get('/', (req, res) => {
    res.send('Server is Running! 🚀');
});

//error middleware
app.use(errorMiddleware);

module.exports = app;
