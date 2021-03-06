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

		this.collectionName = 'collection';
	}

	async init() {
		await this.client.connect();
	}

	async _insert(document) {
		const result = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.insertOne(document);

		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.findOne({ _id: result._insertedId });

		console.log(resultDocument);
		return resultDocument;
	}

	async _getAll() {
		const cursor = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.find({});

		const resultDocuments = [];

		await cursor.forEach((item) => {
			resultDocuments.push(item);
		});

		return resultDocuments;
	}

	async _getOne(filter) {
		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.findOne(filter);

		return resultDocument;
	}

	async _updateOne(filter, values) {
		console.log(values);
		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.findOneAndUpdate(
				filter,
				{
					$set : { ...values }
				},
				{ returnOriginal: false }
			);
		return resultDocument;
	}

	async _deleteOne(filter) {
		const result = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			._deleteOne(filter);

		return result;
	}
}

module.exports = Mongo;
