const express = require('express');
const router = express.Router();

const studentemailController = require('../controllers/studentemailController');

    router
        .route('/studentemailregister')
        .post(studentemailController.studentemailRegister);

module.exports = router;