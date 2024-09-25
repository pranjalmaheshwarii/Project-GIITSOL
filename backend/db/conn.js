const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'mysql-container',
  user: 'root',
  password: 'Pranjal2607!', // Your MySQL root password
  database: 'employees_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});
module.exports = connection;
~                             
