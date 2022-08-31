const express = require('express');
const router = express.Router();
const {
    getAll,
    getMessage,
    createNewMessage
} = require("../controllers/message.controller");

router.get('/', getAll);
router.get('/:id', getMessage);
router.post('/', createNewMessage);

module.exports = router;
