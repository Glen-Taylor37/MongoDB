const Mongo = require('./mongo');

class Users extends Mongo {
	constructor() {
		super();
		this.collectionName = 'users';
	}

	async addUser(user) {
		return await this.insert(user);
	}

	deleteUser(user) {}

	async getUser(userId) {
		const user = await this.getOne(userId);
	}

	updateUser(user) {}
}

module.exports = new Users();
