const express = require("express");
const sequelize = require("./config/db");
const cors = require("cors");

async function main() {
	//initialize express
	const app = express();

	try {
		//connection to db

		//enable cors
		app.use(cors());
		//activating extended parsing json
		app.use(express.json({ extended: true }));

		// in case of needed or wanted create .env with variable PORT
		const PORT = process.env.PORT || 4000;

		//ROUTES

		app.use("/api/tags", require("./routes/tags"));
		app.use("/api/notes", require("./routes/notes"));

		//i try to make a M:N relationship but i run into to many problems
		//app.use("/api/notestags", require("./routes/notestags"));

		await sequelize.sync();

		//this app.listen only purpose is to check that the server is running
		app.listen(PORT, () => {
			console.log(`server running on PORT: ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

main();
