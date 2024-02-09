const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Notes = require("./Note");

const Tags = sequelize.define("Tags", {
	id: {
		type: Sequelize.DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: Sequelize.DataTypes.STRING(30),
		allowNull: false,
		defaultValue: "",
		unique: true,
	},
});

Tags.hasMany(Notes, {
	foreignKey: "tagId",
	sourceKey: "id",
});

Notes.belongsTo(Tags, {
	foreignKey: "tagId",
	targetId: "id",
});
Tags.sync();
Notes.sync();

module.exports = Tags;
const tags = [
	"Uncategorized",
	"Hobby",
	"HealthCare",
	"Work",
	"Studies",
	"Chores",
];
tags.map((tag) => {
	Tags.findOrCreate({
		where: { name: tag },
	});
});
