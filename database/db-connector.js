// Get an instance of mysql we can use in the app
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
let mysql = require('mysql2')

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
    waitForConnections: true,
    connectionLimit   : 10,
    host              : process.env.DB_HOST,
    user              : process.env.DB_USER,
    password          : process.env.DB_PASSWORD,
    database          : process.env.DB_NAME,
    multipleStatements: true
}).promise(); // This makes it so we can use async / await rather than callbacks

// Test the connection
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL connection established successfully');
        connection.release();
        return true;
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
        console.error('Please make sure:');
        console.error('1. MySQL server is running');
        console.error('2. The library_db database exists');
        console.error('3. Username and password are correct');
        return false;
    }
};

// Immediately test the connection
testConnection();

// Export it for use in our application
module.exports = pool;
