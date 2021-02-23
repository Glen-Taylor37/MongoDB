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

	async insert(collectionName, document) {
		const result = await this.client
			.db('test')
			.collection(collectionName)
			.insertOne(document);

		const resultDocument = await this.client
			.db('test')
			.collection(collectionName)
			.findOne({ _id: result.insertedId });

		console.log(resultDocument);
		return resultDocument;
	}

	async getAll(collectionName) {
		const cursor = await this.client
			.db('test')
			.collection(collectionName)
			.find({});

		const resultDocuments = [];

		await cursor.forEach((item) => {
			resultDocuments.push(item);
		});

		return resultDocuments;
	}
}

module.exports = Mongo;
