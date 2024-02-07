const Note = require("../models/Note");
const { validationResult } = require("express-validator");

exports.CreateNote = async (req, res) => {
	//this reads the checks in routes/tags

	const { text, active, tagId } = req.body;

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors);
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const resultado = await Note.create({ text, active, tagId });
		res.json({ resultado });
		//res.send(`Note "${req.body.text}" created!`);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.GetNotes = async (req, res) => {
	try {
		const Notes = await Note.findAll();
		res.json({ Notes });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.UpdateNote = async (req, res) => {
	try {
		//check if the tag exists

		const existingNote = await Note.findOne({
			where: { id: req.params.id },
		});

		//if not we return a alert

		if (!existingNote) {
			return res.status(400).send(`Note with id "${id}" doesnt exists`);
		}

		//else we modify it

		const resultado = await Note.update(
			{
				text: req.body.text,
				active: req.body.active,
				tagId: req.body.tagId,
			},
			{
				where: {
					id: req.params.id,
				},
				returning: true,
				plain: true,
			}
		);
		console.log(resultado[1]);

		res.json({ resultado });
	} catch (error) {
		console.log(error);
		res.status(400).send("Error on created");
	}
};
exports.DeleteNote = async (req, res) => {
	try {
		//check if the tag exists

		const existingNote = await Note.findOne({
			where: { id: req.params.id },
		});

		//if not we return a alert

		if (!existingNote) {
			return res.status(400).send(`Note with id "${id}" doesnt exists`);
		}

		//else we eliminate it

		await Note.destroy({
			where: { id: req.params.id },
		});

		res.json({ msg: `Note with id ${req.params.id} eliminated` });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
