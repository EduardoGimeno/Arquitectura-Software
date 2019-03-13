// Base de datos
const {conection } =  require('./database');

const usuario_login = function (data,res) {
    let sql = 'SELECT Nombre, NombreReal, Email FROM usuario WHERE Email = ?  AND Contraseña = ?'
    conection.query(sql, data, function (err, result) {
      if (err) throw err
      if (result[0] === undefined) {
        res.status(400).send({ error: "Usuario no encontrado"})
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
                            res.status(400).send({error: "Lo siento, ha ocurrido un problema, intentelo de nuevo"})
                        } else {
                            res.status(200).send({ nombre: data[0], nombreReal: data[1], email: data[2] })
                        }
                    })           
                } else {
                    res.status(400).send({error: "Email de usuario ya existente"})
                }
            })         
        } else {
            res.status(400).send({error: "Nombre de usuario ya existente"})
        }
    })
};




module.exports = {
    usuario_registro: usuario_registro,
    usuario_login: usuario_login
};