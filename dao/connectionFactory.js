/* eslint-disable linebreak-style */
const mysql2 = require('mysql2');

function connectionFactory() {
  
  const connection = mysql2.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test',
  });
  connection.getConnection((err, conn) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database!');
      conn.release();
    }
  });

  return connection;
}


module.exports = () => connectionFactory;
