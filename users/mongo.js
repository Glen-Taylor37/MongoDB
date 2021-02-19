const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

const uri = config.MONGO_URI;

class Mongo {
	constructor() {
		this.client = new MongoClient(uri, {
			useNewUrlParser    : true,
			useUnifiedTopology : true
		});
	}

	async init() {
		await this.client.connect();
	}
}

module.exports = Mongo;
