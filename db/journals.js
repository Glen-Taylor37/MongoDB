const Mongo = require('./mongo');
const ObjectID = require('mongodb').ObjectID;

class Journals extends Mongo {
	constructor() {
		super();
		this.collectionName = 'journals';
	}

	async addJournal(document) {
		return await this.insert(document);
	}

	async getJournals() {
		return await this.getAll();
	}

	async getJournal(oid) {
		return await this.getOne({ _id: ObjectID(oid) });
	}

	async updateJournal(oid, documentValues) {
		return await this.updateOne({ _id: ObjectID(oid) }, documentValues);
	}

	async deleteJournal(oid) {
		return await this.deleteOne({ _id: ObjectID(oid) });
	}
}

module.exports = new Journals();
