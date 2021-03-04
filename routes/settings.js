const express = require('express');

const router = express.Router();
const usersClient = require('../db/users');

router.get('/settings/:id', async (req, res) => {});

module.exports = router;
