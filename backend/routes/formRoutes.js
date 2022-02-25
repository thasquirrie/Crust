const express = require('express');
const formController = require('../controllers/formController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    formController.getAllForms
  )
  .post(
    authController.protect,
    formController.uploads,
    formController.createForm
  );

router
  .route('/:id')
  .get(authController.protect, formController.getForm)
  .patch(
    authController.protect,
    formController.uploads,
    formController.editForm
  );

module.exports = router;
