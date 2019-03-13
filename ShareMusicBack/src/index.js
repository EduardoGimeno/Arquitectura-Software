const express = require('express');
const config = require('./server/config');

// Base de datos
require('./database/database');
// Servidor
const app = config(express());
app.listen(app.get('port'), () =>{
    console.log('Servidor escuchando puerto: ',app.get('port'))
});