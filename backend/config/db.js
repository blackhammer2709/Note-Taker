const Sequelize = require("sequelize");

const sequelize = new Sequelize("NoteTaker", "postgres", "2709", {
	host: "localhost",
	dialect: "postgres",
});

/*const connectDB = () => {
	try {
		return new Sequelize("NoteTaker", "postgres", "2709", {
			host: "localhost",
			dialect: "postgres",
		});
	} catch (error) {
		console.log(`ERROR CONNECTING TO DATABASE ${error}`);
		process.exit(1);
	}
};
*/
module.exports = sequelize;
