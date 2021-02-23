const Mongo = require('./mongo');

class Users extends Mongo {
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
}

module.exports = new Users();
