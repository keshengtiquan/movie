const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'L123456,',
  database: 'movie',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports = pool;