const Mongo = require('./mongo');
const ObjectID = require('mongodb').ObjectID;

class Journals extends Mongo {
	constructor() {
		super();
		this.collectionName = 'journals';
	}

	async addJournal(document) {
		return await this._insert(document);
	}

	async getJournals() {
		return await this._getAll();
	}

	async getJournal(oid) {
		return await this._getOne({ _id: ObjectID(oid) });
	}

	async updateJournal(oid, documentValues) {
		return await this._updateOne({ _id: ObjectID(oid) }, documentValues);
	}

	async deleteJournal(oid) {
		return await this._deleteOne({ _id: ObjectID(oid) });
	}
}

module.exports = new Journals();
