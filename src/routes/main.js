// ************ Require's ************
const express = require('express');
const router = express.Router();
const userValidation = require('../middlewares/userValidation');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/admin',userValidation, mainController.admin);

module.exports = router;
