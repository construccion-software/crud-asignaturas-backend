const exp = require('express');
const morgan = require('morgan');
const subjects = require('./API/subjects');
const bodyParser = require('body-parser');
app = exp();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Headers para que se utilicen los API desde cualquier puerto :)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Rutas
app.use('/Subjects',subjects);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status (err.status || 500);
    res.json({
        error:{
            message: err.message
        }
    })
});

module.exports = app;