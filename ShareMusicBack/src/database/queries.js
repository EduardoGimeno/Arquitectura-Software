// Base de datos
var mysql = require('mysql');
//datos de configuración BD en Heroku
var conection_cfg = {
    host:'eu-cdbr-west-02.cleardb.net' ,
    user:'b5a7ddd37c8593',
    password:'64f574cf',
    database:'heroku_efb95a0eab20b17'

};
// Crear pool de conexiones
var pool =  mysql.createPool(conection_cfg)

const usuario_login = function (data,res) {
    let sql = 'SELECT Nombre, NombreReal, Email, Biografia FROM usuario WHERE Email = ?  AND Contraseña = ?'
    pool.query(sql, data, function (err, result) {
      if (err) throw err
      if (result[0] === undefined) {
        res.status(201).send({ error: "Usuario no encontrado"})
      } else {
        res.status(200).send({ nombre: result[0].Nombre, nombreReal: result[0].NombreReal, email: result[0].Email, biografia:result[0].Biografia})
      }
    })
};

const usuario_registro = function (data,res) {
    let sql = 'SELECT Nombre, NombreReal, Email FROM usuario WHERE Nombre = ?';
    pool.query(sql,data[0], function (err, result) {
        if (err) throw err;
        if (result[0] === undefined) {
            let sql = 'SELECT Nombre, NombreReal, Email FROM usuario WHERE Email = ?';
            pool.query(sql,data[2], function (err, result) {
                if (err) throw err;
                if (result[0] === undefined) {
                    let sql = 'INSERT INTO usuario(Nombre, NombreReal, Email, Contraseña) VALUES (?) ';
                    pool.query(sql,[data], function (err, result) {
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

const numSeguidos = function (data,res) {
    let sql = 'select count(*) as seguidos from seguidos where NomUsuario= ?'
    pool.query(sql, data, function (err, result) {
      if (err) throw err
      else {
        res.status(200).send({ totalSeguidos: result[0]['seguidos'] })
      }
    })
};
const numSeguidores = function (data,res) {
    let sql = 'select count(*) as seguidores from seguidos where UsuarioSeguido= ?'
    pool.query(sql, data, function (err, result) {
      if (err) throw err
      else {
        res.status(200).send({ totalSeguidores: result[0]['seguidores']})
      }
    })
};
const numBloqueados = function (data,res) {
    let sql = 'select count(*) as bloqueados from bloqueados where NomUsuario= ?'
    pool.query(sql, data, function (err, result) {
      if (err) throw err
      else {
        res.status(200).send({ totalBloqueados: result[0]['bloqueados']})
      }
    })
};

const usuario_seguir = function (data,res) {
    let sql = 'INSERT INTO seguidos (NomUsuario, UsuarioSeguido) VALUES(?)'
    pool.query(sql, [data], function (err, result) {
      if (err) throw err
      else {
        res.status(200).send()
      }
    })
};

const usuario_dejarseguir = function (data,res) {
    let sql = 'DELETE FROM seguidos WHERE NomUsuario=? AND UsuarioSeguido=?'
    pool.query(sql, data, function (err, result) {
      if (err) throw err
      else {
        res.status(200).send()
      }
    })
};

const usuario_bloquear = function (data,res) {
    let sql = 'INSERT INTO bloqueados (NomUsuario, UsuarioBloqueado) VALUES(?);'
    pool.query(sql, [data], function (err, result) {
      if (err) throw err
      else {
        let sql = 'DELETE FROM seguidos WHERE NomUsuario=? AND UsuarioSeguido=?'
        pool.query(sql, data, function (err, result) {
          if (err) throw err
          else {
            res.status(200).send()
          }
        })
      }
    })
};
const usuario_desbloquear = function (data,res) {
    let sql = 'DELETE FROM bloqueados  WHERE NomUsuario=? AND UsuarioBloqueado=?'
    pool.query(sql, data, function (err, result) {
      if (err) throw err
      else {
        res.status(200).send()
      }
    })
};
const usuario_esSeguidor = function (data,res) {
  let sql = 'SELECT * FROM seguidos WHERE NomUsuario=? AND UsuarioSeguido=?'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    if (result[0] === undefined) {
      let sql = 'SELECT * FROM bloqueados WHERE NomUsuario=? AND UsuarioBloqueado=?'
        pool.query(sql, data, function (err, result) {
          if (err) throw err
          if (result[0] === undefined) {
            res.status(200).send({seguido:0, bloqueado:0})
          }
          else {
            res.status(200).send({seguido:0, bloqueado:1})
          }
        })
    }
    else {
      res.status(200).send({seguido:1, bloqueado:0})
    }
  })
};

const usuario_listBloqueados = function (data,res) {
  let sql = 'select UsuarioBloqueado from bloqueados where NomUsuario= ?'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
const usuario_listSeguidores = function (data,res) {
  let sql = 'select NomUsuario from seguidos where UsuarioSeguido= ?'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
const usuario_listSeguidos = function (data,res) {
  let sql = 'select UsuarioSeguido from seguidos where NomUsuario= ?'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
const usuario_editarperfil = function (data,res) {
  let sql = 'update usuario SET Biografia=? WHERE Nombre=?'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send()
    }
  })
};
const usuario_biografia = function (data,res) {
  let sql = 'SELECT Biografia FROM usuario WHERE Nombre=?'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send({ biografia: result[0].Biografia})
    }
  })
};
const usuario_perfil = function (data,res) {
  let sql = 'SELECT Nombre, NombreReal, Email, Biografia FROM usuario where Nombre=?;'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send({ nombre: result[0].Nombre, nombreReal: result[0].NombreReal, email: result[0].Email, biografia:result[0].Biografia})
    }
  })
};

const usuario_borrar = function (data,res) {
  let sql = 'DELETE FROM usuario WHERE Nombre=? AND Contraseña=?;'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send()
    }
  })
};
const usuario_cambiarpass = function (data,res) {
  let sql = 'UPDATE usuario SET Contraseña=? WHERE Nombre=? AND Contraseña=?;'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send()
    }
  })
};

const usuario_buscarusuarios = function (data,res) {
  var busqueda='\''
  busqueda+=data[0]
  busqueda+='%\''
  let sql = 'SELECT Nombre, NombreReal FROM usuario where Nombre like '+ busqueda+' or NombreReal like '+ busqueda+'; '
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
// POST 
const post_get_todos_posts = function (data,res) {
  let sql = 'SELECT DISTINCT a.* FROM post a , seguidos b where (a.NomUsuario=b.NomUsuario or a.NomUsuario=b.UsuarioSeguido) and b.NomUsuario=? order by a.Id desc'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
      console.log(result)
    }
  })
};
const post_get_propios_posts = function (data,res) {
  let sql = 'SELECT * FROM post where NomUsuario = ? order by Id desc'
  pool.query(sql, data, function (err, result) {
    if (err){
      throw err
    }
    else {
      res.status(200).send(result)
    }
  })
};
const post_add_post = function (data,res) {
  let sql = 'INSERT INTO post (NomUsuario, Texto, Likes, Dislikes, Titulo) VALUES(?, ?, 0, 0, ?);'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
const post_editar_post = function (data,res) {
  let sql = 'UPDATE post SET Texto=? ,Titulo=? WHERE Id=?'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
const post_borrar_post = function (data,res) {
  let sql = 'DELETE FROM post  WHERE Id=?;'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
      
    }
  })
};

const post_like = function (data,res) {
  let sql = 'UPDATE post SET Likes= Likes + 1 WHERE Id=?;'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
const post_dislike = function (data,res) {
  let sql = 'UPDATE post SET Dislikes = Dislikes + 1 WHERE Id=?;'
  pool.query(sql, data, function (err, result) {
    if (err) throw err
    else {
      res.status(200).send(result)
    }
  })
};
module.exports = {
    usuario_registro: usuario_registro,
    usuario_login: usuario_login,
    numSeguidos:numSeguidos,
    numSeguidores:numSeguidores,
    numBloqueados:numBloqueados,
    usuario_seguir:usuario_seguir,
    usuario_dejarseguir:usuario_dejarseguir,
    usuario_bloquear:usuario_bloquear,
    usuario_desbloquear:usuario_desbloquear,
    usuario_esSeguidor:usuario_esSeguidor,
    usuario_listBloqueados:usuario_listBloqueados,
    usuario_listSeguidores:usuario_listSeguidores,
    usuario_listSeguidos:usuario_listSeguidos,
    usuario_editarperfil:usuario_editarperfil,
    usuario_biografia:usuario_biografia,
    usuario_perfil:usuario_perfil,
    usuario_borrar:usuario_borrar,
    usuario_cambiarpass:usuario_cambiarpass,
    usuario_buscarusuarios:usuario_buscarusuarios,
    post_get_todos_posts:post_get_todos_posts,
    post_get_propios_posts:post_get_propios_posts,
    post_add_post:post_add_post,
    post_borrar_post:post_borrar_post,
    post_editar_post:post_editar_post,
    post_like:post_like,
    post_dislike:post_dislike
}