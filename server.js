const express = require('express');
const bodyParser = require('body-parser');

const produtos = require('./routes/rotas');
const app = express();


const mongoose = require('mongoose');
let dev_db_url = 'mongodb://chris:c200396@ds043987.mlab.com:43987/produtos';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/produtos', produtos);


app.listen(3000, () => {
    console.log('Servidor rodando na porta' + 3000);
});