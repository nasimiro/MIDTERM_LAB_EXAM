  
const { execute, getResults } = require('./db');

module.exports.userLogin = function (username, callback) {
  const sql = 'SELECT * FROM users WHERE username = ?';
  const params = [username];
  getResults(sql, params, (result) => {
    callback(result);
  });
};