const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');

const app = express();

// import routes
const usuariosRoutes = require('./routes/usuariosRoutes');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '*************',
    port: 3306,
    database: 'landingpage'
}, 'single'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// routes
app.use(usuariosRoutes);

// statics files
app.use(express.static(path.join(__dirname, 'public')));

// start
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
