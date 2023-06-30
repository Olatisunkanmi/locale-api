module.exports = {
	createApiKey: `INSERT INTO apiKeys (apiKey, user_id) VALUES (?, ?)`,
	findApiKey: `SELECT * FROM apiKeys WHERE apiKey = ?`,
};
