const express = require('express');
const config = require('./config');
const usersClient = require('./users/users');

const start = async () => {
	const app = express();

	app.get('/', (req, res) => {
		res.send('Hello World!');
	});

	app.listen(config.PORT, () => {
		console.log(`App listening at port: ${config.PORT}`);
	});

	await usersClient.init();
};

module.exports = { start };
