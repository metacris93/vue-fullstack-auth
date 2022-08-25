const express = require('express');
const router = express.Router();
const {
    getAll,
    createNewMessage
} = require("../controllers/message.controller");

router.get('/', getAll);
router.post('/', createNewMessage);

module.exports = router;
