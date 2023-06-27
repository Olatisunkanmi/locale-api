module.exports = {
	fetchUserByEmail: `SELECT * FROM users WHERE email = ?`,
	fetchUsers: ` SELECT
	id,
	first_name, 
	last_name,
	email FROM users`,

	fetchUserById: `SELECT 
	id,
	first_name, 
	last_name,
	email FROM users WHERE id = ?`,

	createUser: `INSERT INTO users (id, first_name, last_name, email, password, confirm_password, api_key )
	VALUES(?, ?, ?, ?, ?, ?, ? )`,
};
