const morgan = require('morgan');
const routesUsuario = require('../routes/usuario')
var cors = require('cors')
var bodyParser = require('body-parser')
//const routesPosts = require('../routes/post')
module.exports = app => {

    // ajustes 
    app.set('port', process.env.PORT || 3000); 
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // rutas
    app.use('/usuario',routesUsuario);
    //app.use('/post',routesPosts);

    // mostrar mensajes
    app.use(morgan('dev'));
    return app;
}