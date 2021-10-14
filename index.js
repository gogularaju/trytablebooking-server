const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { baseURL, restURL, database } = require('./config');

//Import routers
const TableRoute = require('./routes/tables');
const MenuRoute = require('./routes/menu');
const OrderRoute = require('./routes/orders');



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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors());
app.options('*', cors());

//Routers
//app.use('/', TableRoute);
app.use('/tables', TableRoute);
app.use('/menu', MenuRoute);
app.use('/orders', OrderRoute);

//Server Init
const PORT = process.env.PORT || 5000;

// Start node server
app.listen(PORT, function() {
   console.log('Node server is running on port ' + PORT);
});







