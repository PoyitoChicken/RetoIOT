const mysql =   require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'master',
    password: 'masteruser!',
    database: 'IOT'
  });
  
const openConnection = async = () => {
    connection.connect((err) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          debugger;
          return;
        }
        executeQuery();
        closeConnection();
      });
}

const executeQuery = async = () => {
    const query = "SHOW DATABASES;"
    connection.query(query, (err, results, fields) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          debugger;
          return;
        }
        results = JSON.stringify(results);
        results = results.replace(/["\[\]{},]/gi, '').replace(/:/g, '\n').replace(/Database/gi, '');
        results = results.split('\n');
        for ( let i = 0; i < results.length; i++) {
            console.log(`${i+1}.- ${results[i]}`);
        }
      });
}

const closeConnection = async = () => {
    connection.end();
}
openConnection()