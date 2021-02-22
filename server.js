const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const usersClient = require('./users/users');
const router = require('./routes/routes');

const start = async () => {
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use(router);

	app.listen(config.PORT, () => {
		console.log(`App listening at port: ${config.PORT}`);
	});

	await usersClient.init();
};

module.exports = { start };
