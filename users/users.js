const Mongo = require('./mongo');

class Users extends Mongo {
	constructor() {
		super();
	}

	addUser(user) {}

	deleteUser(user) {}

	getUsers() {}

	updateUser(user) {}

	async addJournal(document) {
		const newJournalDocument = await this.insert('journals', document);
		return newJournalDocument;
	}
}

module.exports = new Users();
