'use strict';
const express = require("express");
const router = express.Router();
const {user_list_get, user_get} = require("../controllers/userController");

router.get('/', user_list_get);


router.get('/:id',user_get);

router.post('/', (req, res) => {
    res.send('From this endpoint you can add users.');
});

router.put('/', (req, res) => {
    res.send('From this endpoint you can modify users.');
});
router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete users.');
});

module.exports = router;
