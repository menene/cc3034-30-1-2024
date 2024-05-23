import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'mysql',
    user: 'login_user',
    password: 'login_pasword',
    database: 'blog',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool