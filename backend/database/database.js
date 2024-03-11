const { Pool } = require('pg');

const defaultConnectionParams = {
  user: 'postgres',
  host: 'localhost',
  database: 'DiscordSaver',
  password: '111',
  port: 5432, 
};

const bUseDatabase = false;// If you don't have a database, change bUseDatabase to false
let pool = null;

if(bUseDatabase){
  pool = new Pool(defaultConnectionParams);
}




function insertSingleQuery(data){
    // If you don't have a database, change bUseDatabase to false
    if(!bUseDatabase) return

   const insertQuery = 'INSERT INTO messages.messages (username, nickname, server_id, channel_id, message_id, message_content) VALUES ($1, $2, $3, $4, $5, $6)';
   const values = [data.username, data.nickname, data.server_id, data.channel_id, data.message_id, data.message_content];
   
   pool.query(insertQuery, values, (err, res) => {
     if (err) {
       console.error('Error inserting data:', err);
     } else {
       console.log('Data inserted successfully');
     }
     
     //pool.end(); // bad practice not ending it? Never used postgresql I don't think
   });
}


module.exports = {
    insertSingleSqlQuery: insertSingleQuery,

}
