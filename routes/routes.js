const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello World!');
});

router.post('/journals', (req, res) => {
	res.send('We got it!');
	console.log(req.body);
});

module.exports = router;
