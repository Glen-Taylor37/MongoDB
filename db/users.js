const Mongo = require('./mongo');

class Users extends Mongo {
	constructor() {
		super();
		this.journalCollection = 'users';
	}

	addUser(user) {}

	deleteUser(user) {}

	getUsers() {}

	updateUser(user) {}
}

module.exports = new Users();
