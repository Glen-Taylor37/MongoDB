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

	async insert(document) {
		const result = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.insertOne(document);

		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.findOne({ _id: result.insertedId });

		console.log(resultDocument);
		return resultDocument;
	}

	async getAll() {
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

	async getOne(oid) {
		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.findOne({ _id: ObjectID(oid) });

		return resultDocument;
	}

	async updateOne(oid, values) {
		console.log(values);
		const resultDocument = await this.client
			.db(config.DB_NAME)
			.collection(this.collectionName)
			.findOneAndUpdate(
				{ _id: ObjectID(oid) },
				{
					$set : { ...values }
				},
				{ returnOriginal: false }
			);
		return resultDocument;
	}
}

module.exports = Mongo;
