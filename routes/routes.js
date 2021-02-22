const express = require('express');
const router = express.Router();
const usersClient = require('../users/users');

router.get('/', (req, res) => {
	res.send('Hello World!');
});

router.post('/journals', async (req, res) => {
	const result = await usersClient.addJournal(req.body);
	console.log('result: ', result);
	res.json(result);
});

router.get('/journals', (req, res) => {
	//res.send;
});

module.exports = router;
