const Mongo = require('./mongo');

class Users extends Mongo {
	constructor() {
		super();
		this.collectionName = 'users';
	}

	async addUser(user) {
		return await this._insert(user);
	}

	deleteUser(user) {}

	async getUser(userId) {
		const user = await this._getOne({ userId });
		console.log(user);
	}

	updateUser(user) {}
}

module.exports = new Users();
