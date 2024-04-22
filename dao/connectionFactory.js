/* eslint-disable linebreak-style */
const mysql = require('mysql2');

function connectionFactory() {
  return mysql.createConnection({
    host: process.env.DB_HOST || '20.163.172.38',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Yj?9khiu',
    database: process.env.DB_NAME || 'libreshop',
  });
}


module.exports = () => connectionFactory;
