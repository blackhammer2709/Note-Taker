const Sequelize = require("sequelize");

const sequelize = require("../config/db");

const Notes = sequelize.define("Notes", {
	id: {
		type: Sequelize.DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	text: {
		type: Sequelize.DataTypes.TEXT,
		allowNull: false,
		defaultValue: "",
	},
	active: {
		type: Sequelize.DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
});

Notes.sync();
module.exports = Notes;
