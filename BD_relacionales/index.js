//configurar con express el servidor de la app

//importar express, la variable express guarda la libreria 
const express = require('express');
//la variable app guarda la instancia de express (configuracion del servidor)
const app = express();

//configurar el puerto  de comunicacion donde se ejecutara la app
app.set('port', 3000);
//iniciar el servidor en el puerto configurado
app.listen(3000);

//llamar al componente  de mysql para conectar con la base de datos
var mysql = require('mysql');

//Establecer los parametros de conexion a la base de datos
var miConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Luismich*2025',
    database: 'base_001'
});

//conectar con la base de datos
miConexion.connect();

//Agregar un registro a la base de datos, la funcion (error, resultado) es un callback que se ejecuta cuando se completa la consulta
miConexion.query('insert into clientes values (1, "Michael", 1,1234567890, "calle 1234")', function (error, resultado){
//el if verifica si hubo un error en la consulta, si lo hubo lo lanza, si no muestra un mensaje de exito
    if(error) throw error;
console.log('Registro insertado correctamente, resultado: ', resultado);
});

//realizar una consulta a la base de datos, la funcion (error, resultados) es un callback que se ejecuta cuando se completa la consulta
miConexion.query('select * from clientes', function (error, resultados){
//el if verifica si hubo un error en la consulta, si lo hubo lo lanza, si no muestra los resultados
    if(error) throw error;
console.log('Los registros son: ', resultados);
});

//modificar un registro en la base de datos, la funcion (error, resultado) es un callback que se ejecuta cuando se completa la consulta
miConexion.query('update clientes set nombre="Luis" where idcliente=1', function (error, resultado){
//el if verifica si hubo un error en la consulta, si lo hubo lo lanza, si no muestra un mensaje de exito
    if(error) throw error;
console.log('Registro modificado correctamente', resultado);
});

//realizar una consulta a la base de datos, la funcion (error, resultados) es un callback que se ejecuta cuando se completa la consulta
miConexion.query('select * from clientes', function (error, resultados){
//el if verifica si hubo un error en la consulta, si lo hubo lo lanza, si no muestra los resultados
    if(error) throw error;
console.log('Los registros son: ', resultados);
});

//eliminar un registro en la base de datos, la funcion (error, resultado) es un callback que se ejecuta cuando se completa la consulta
miConexion.query('delete from clientes where idcliente=1', function (error, resultado){
//el if verifica si hubo un error en la consulta, si lo hubo lo lanza, si no muestra un mensaje de exito
    if(error) throw error;
console.log('Registro eliminado correctamente', resultado);
});

//realizar una consulta a la base de datos, la funcion (error, resultados) es un callback que se ejecuta cuando se completa la consulta
miConexion.query('select * from clientes', function (error, resultados){
//el if verifica si hubo un error en la consulta, si lo hubo lo lanza, si no muestra los resultados
    if(error) throw error;
console.log('Los registros son: ', resultados);
});


//cerrar la conexion a la base de datos
miConexion.end();





