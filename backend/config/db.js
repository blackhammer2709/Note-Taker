const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	process.env.DB_URL ||
		"postgres://testing:FIInMUWsUGA0deohfJ064feTqm3wWwDS@dpg-cn23vm2cn0vc738tb8a0-a.oregon-postgres.render.com/notetaker_6qzd?ssl=true",
	{
		pool: {
			max: 10,
			min: 0,
			iddle: 100000,
		},
	}
);
//dpg-cn23vm2cn0vc738tb8a0-a
//notetaker_6qzd
//testing
//FIInMUWsUGA0deohfJ064feTqm3wWwDS
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
