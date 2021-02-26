const Mongo = require('./mongo');

class Journals extends Mongo {
	constructor() {
		super();
		this.journalCollection = 'journals';
	}

	addUser(user) {}

	deleteUser(user) {}

	getUsers() {}

	updateUser(user) {}

	async addJournal(document) {
		const newJournalDocument = await this.insert(
			this.journalCollection,
			document
		);
		return newJournalDocument;
	}

	async getJournals() {
		return await this.getAll(this.journalCollection);
	}

	async getJournal(oid) {
		return await this.getOne(this.journalCollection, oid);
	}
}

module.exports = new Journals();
