const express = require('express');
const router = express.Router();
const {
    getAll
} = require("../controllers/message.controller");

router.get('/', getAll);

module.exports = router;
