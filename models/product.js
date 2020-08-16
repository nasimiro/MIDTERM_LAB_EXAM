const { execute, getResults } = require('./db');

module.exports.getSingleProduct = function (id, callback) {
  const sql = 'SELECT * FROM products where products.id = ?';
  getResults(sql, [id], (result) => {
    callback(result[0]);
  });
};

module.exports.getAllProducts = function (callback) {
  const sql = 'SELECT * FROM products';
  getResults(sql, null, (result) => {
    callback(result);
  });
};

module.exports.addProduct = function (data, callback) {
  const sql = 'INSERT INTO products SET ?';
  execute(sql, data, (result) => {
    callback(result);
  });
};

module.exports.updateProduct = function (id, data, callback) {
  const sql = `UPDATE products SET ? WHERE products.id = '${id}'`;
  execute(sql, data, (result) => {
    callback(result);
  });
};

module.exports.removeProduct = function (id, callback) {
  const sql = 'DELETE FROM products WHERE products.id = ?';
  execute(sql, [id], (result) => {
    callback(result);
  });
};