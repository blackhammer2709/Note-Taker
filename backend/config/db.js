const Sequelize = require("sequelize");

const sequelize = new Sequelize({
	dialect: "postgres",
	host: process.env.HOST || "localhost",
	database: process.env.DB || "NoteTaker",
	username: process.env.USER || "postgres",
	password: process.env.PS || "2709",
});

//process.env.url
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
