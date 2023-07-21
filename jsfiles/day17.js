"use strict";
let mysql = require('mysql');
let connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
});
var table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT," +
    "name varchar(30) DEFAULT NULL," +
    "age float(15) DEFAULT NULL," +
    "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";
connect.getConnection((err, connection) => {
    connection.query(table, (err) => {
        if (err)
            throw err;
        else {
            console.log("Success");
        }
    });
    connection.release();
});
