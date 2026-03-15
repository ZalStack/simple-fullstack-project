const mysql = require('mysql2');

// Buat koneksi pool
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'product_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Promise wrapper untuk async/await
const promiseDb = db.promise();

module.exports = promiseDb;