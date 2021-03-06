const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const journalsClient = require('./db/journals');
const usersClient = require('./db/users');
const journalRouter = require('./routes/journals');
const settingsRouter = require('./routes/settings');

const start = async () => {
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use(journalRouter);
	app.use(settingsRouter);

	await usersClient.init();
	await journalsClient.init();

	app.listen(config.PORT, () => {
		console.log(`App listening at port: ${config.PORT}`);
	});
};

module.exports = { start };
