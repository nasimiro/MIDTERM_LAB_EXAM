  
const { execute, getResults } = require('./db');

module.exports.userLogin = function (username, callback) {
  const sql = 'SELECT * FROM users WHERE username = ?';
  const params = [username];
  getResults(sql, params, (result) => {
    callback(result);
  });
};
module.exports.getSingleUser = function (id, callback) {
    const sql = 'SELECT * FROM users where users.id = ?';
    getResults(sql, [id], (result) => {
      callback(result[0]);
    });
  };
  
  module.exports.userRegister = function (data, callback) {
    const sql = 'INSERT INTO users SET ?';
    execute(sql, data, (result) => {
      callback(result);
    });
  };
  
  module.exports.getAllUsers = function (callback) {
    const sql = 'SELECT * FROM users';
    getResults(sql, null, (result) => {
      callback(result);
    });
  };
  
  module.exports.getAllUsers = function (callback) {
    const sql = 'SELECT * FROM users';
    getResults(sql, null, (result) => {
      callback(result);
    });
  };
  
  module.exports.searchUsers = function (searchTerm, callback) {
    const sql = `SELECT * FROM users WHERE users.username LIKE '%${searchTerm}%'`;
  
    getResults(sql, [null], (result) => {
      console.log('search result form database ' + result);
      callback(result);
    });
  };