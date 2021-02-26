const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

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
			.db(config.DB_NAME)
			.collection(collectionName)
			.insertOne(document);

		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(collectionName)
			.findOne({ _id: result.insertedId });

		console.log(resultDocument);
		return resultDocument;
	}

	async getAll(collectionName) {
		const cursor = await this.client
			.db(config.DB_NAME)
			.collection(collectionName)
			.find({});

		const resultDocuments = [];

		await cursor.forEach((item) => {
			resultDocuments.push(item);
		});

		return resultDocuments;
	}

	async getOne(collectionName, oid) {
		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(collectionName)
			.findOne({ _id: ObjectID(oid) });

		return resultDocument;
	}
}

module.exports = Mongo;
