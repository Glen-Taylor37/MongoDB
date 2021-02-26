const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const journalsClient = require('./db/journals');
const router = require('./routes/routes');

const start = async () => {
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use(router);

	await journalsClient.init();

	app.listen(config.PORT, () => {
		console.log(`App listening at port: ${config.PORT}`);
	});
};

module.exports = { start };
