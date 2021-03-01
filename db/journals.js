const Mongo = require('./mongo');

class Journals extends Mongo {
	constructor() {
		super();
		this.collectionName = 'journals';
	}

	async addJournal(document) {
		const newJournalDocument = await this.insert(document);
		return newJournalDocument;
	}

	async getJournals() {
		return await this.getAll();
	}

	async getJournal(oid) {
		return await this.getOne(oid);
	}

	async updateJournal(oid, documentValues) {
		return await this.updateOne(oid, documentValues);
	}
}

module.exports = new Journals();
