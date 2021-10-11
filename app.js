const express = require('express');
const mongoose = require('mongoose');
const { baseURL, restURL, database } = require('./config');

//Import routers
const TableRoute = require('./routes/tables');
const MenuRoute = require('./routes/menu');


//App init
const app = express();

//DB Connection
const url = `${baseURL}/${database}?${restURL}`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch((error) => {
            const { message = '' } = error || {}
            console.log('DB connection refused with error => ', message)
        });

const con = mongoose.connection;
con.on('open', () => {
    console.log('Database connected successfully')
});

con.on('close', () => {
    console.log('Database disconnected...')
});


app.use(express.json());

//Routers
app.use('/tables', TableRoute);
app.use('/menu', MenuRoute);

//Server Init
app.listen(8080, () => {
    console.log('Server started...')
});








