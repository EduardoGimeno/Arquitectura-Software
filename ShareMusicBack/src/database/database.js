var mysql = require('mysql');
//datos de configuración BD en Heroku
var conection_cfg = {
    host:'eu-cdbr-west-02.cleardb.net' ,
    user:'b5a7ddd37c8593',
    password:'64f574cf',
    database:'heroku_efb95a0eab20b17'

};

var conection;

conection = mysql.createConnection(conection_cfg);
function connectionHandler(){
    conection = mysql.createConnection(conection_cfg);
    conection.connect(function (err) {
        if(err){
            console.log('Error al conectar a bd');
        }
        console.log('Conectado con bd')
    });
    conection.on('error', function(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Reconectando a bd...');
            connectionHandler();
        } else {
            throw err;
        }
    });
}
connectionHandler();

module.exports = {
    conection: conection
}