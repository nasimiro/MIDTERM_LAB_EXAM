const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {
  getAllProducts,
  addProduct,
  updateProduct,
  removeProduct,
  getSingleProduct,
} = require('../models/products');

router.get('/', (req, res) => {
  getAllProducts((products) => {
    return res.render('employee/dashboard', { products: products });
  });
});

router.post('/', (req, res) => {
  addProduct(req.body, (result) => {
    res.redirect('/employee');
  });
});

router.get('/update/:id', (req, res) => {
  getSingleProduct(req.params.id, (result) => {
    console.log(result);
    return res.render('employee/editProducts', { product: result });
  });
});

router.post('/update/:id', (req, res) => {
  updateProduct(req.params.id, req.body, (result) => {
    return res.redirect('/employee');
  });
});

router.get('/delete/:id', (req, res) => {
  console.log(req.params.id);
  removeProduct(req.params.id, (result) => {
    return res.redirect('/employee');
  });
});

router.post('/delete/:id', (req, res) => {
  console.log(req.params.id);
  removeProduct(req.params.id, (result) => {
    res.redirect('/admin/AllEmployeeList');
  });
});

module.exports = router;