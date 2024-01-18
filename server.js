const app = require('./app');
const port = process.env.PORT;

app.listen(port,(err) => {
    console.log('Listening on port ',port);
})