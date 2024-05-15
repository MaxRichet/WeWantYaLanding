const express = require('express');
const router = express.Router();

const startupemailController = require('../controllers/startupemailController');

    router
        .route('/startupemailregister')
        .post(startupemailController.startupemailRegister);

module.exports = router;