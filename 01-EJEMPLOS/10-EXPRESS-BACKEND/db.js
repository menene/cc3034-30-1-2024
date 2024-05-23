import conn from './conn.js'

export async function processLogin(username, password) {
    const [user] = await conn.query('SELECT id, username, name, email FROM users WHERE username = ? and password = ?', [username, password]);
    
    return user[0]
}