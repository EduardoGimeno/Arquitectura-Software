// Base de datos
var mysql = require('mysql');
//datos de configuración BD en Heroku
var conection_cfg = {
    host:'eu-cdbr-west-02.cleardb.net' ,
    user:'b5a7ddd37c8593',
    password:'64f574cf',
    database:'heroku_efb95a0eab20b17'

};

var conection;
// mySql cierra la conexion cuando se le agota el timeout, 
// volver a lanzar
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

const usuario_login = function (data,res) {
    let sql = 'SELECT Nombre, NombreReal, Email FROM usuario WHERE Email = ?  AND Contraseña = ?'
    conection.query(sql, data, function (err, result) {
      if (err) throw err
      if (result[0] === undefined) {
        res.status(201).send({ error: "Usuario no encontrado"})
      } else {
        res.status(200).send({ nombre: result[0].Nombre, nombreReal: result[0].NombreReal, email: result[0].Email })
      }
    })
};

const usuario_registro = function (data,res) {
    let sql = 'SELECT Nombre, NombreReal, Email FROM usuario WHERE Nombre = ?';
    conection.query(sql,data[0], function (err, result) {
        if (err) throw err;
        if (result[0] === undefined) {
            let sql = 'SELECT Nombre, NombreReal, Email FROM usuario WHERE Email = ?';
            conection.query(sql,data[2], function (err, result) {
                if (err) throw err;
                if (result[0] === undefined) {
                    let sql = 'INSERT INTO usuario(Nombre, NombreReal, Email, Contraseña) VALUES (?) ';
                    conection.query(sql,[data], function (err, result) {
                        if (err) throw err;
                        if (result.affectedRows === 0) {
                            res.status(201).send({error: "Lo siento, ha ocurrido un problema, intentelo de nuevo"})
                        } else {
                            res.status(200).send({ nombre: data[0], nombreReal: data[1], email: data[2] })
                        }
                    })           
                } else {
                    res.status(201).send({error: "Email de usuario ya existente"})
                }
            })         
        } else {
            res.status(201).send({error: "Nombre de usuario ya existente"})
        }
    })
};




module.exports = {
    usuario_registro: usuario_registro,
    usuario_login: usuario_login
};