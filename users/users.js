const Mongo = require('./mongo');

class Users extends Mongo {
	constructor() {
		super();
	}

	addUser(user) {}

	deleteUser(user) {}

	getUsers() {}

	updateUser(user) {}
}

module.exports = new Users();
