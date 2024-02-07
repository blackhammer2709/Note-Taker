const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	"postgres://notetaker_pko7_user:hclZbn2UJZi1IB5l8PzPMpWPDSjc1Hrv@dpg-cn1eob6d3nmc73bmul1g-a/notetaker_pko7"
);

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
