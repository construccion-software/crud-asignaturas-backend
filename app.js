const exp = require('express');
const subjects = require('./API/subjects');
app = exp();

// Rutas
app.use(exp.json());
app.use('/Subjects',subjects);


module.exports = app;