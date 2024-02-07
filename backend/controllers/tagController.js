const Notes = require("../models/Note");
const Tag = require("../models/Tag");
const { validationResult } = require("express-validator");

exports.CreateTag = async (req, res) => {
	//this reads the checks in routes/tags

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors);
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		//now we check if the name of the tag already exists in the db

		const existingTag = await Tag.findOne({
			where: { name: req.body.name },
		});

		//if existe we return a alert

		if (existingTag) {
			return res
				.status(400)
				.send(`Tag with name "${req.body.name}" already exists`);
		}

		//if not we create it
		const resultado = await Tag.create({ name: req.body.name });
		res.json({ resultado });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.GetTags = async (req, res) => {
	try {
		const Tags = await Tag.findAll();
		res.json({ Tags });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.GetTagNotes = async (req, res) => {
	try {
		const existingTag = await Tag.findOne({
			where: { id: req.params.id },
		});

		//if existe we return a alert

		if (!existingTag) {
			return res
				.status(400)
				.send(`Tag with id "${req.params.id}" doesnt exists`);
		}
		const notes = await Notes.findAll({
			where: { tagId: req.params.id },
		});
		res.json(notes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.UpdateTag = async (req, res) => {
	try {
		//check if the tag exists

		const existingTag = await Tag.findOne({
			where: { id: req.params.id },
		});

		//if not we return a alert

		if (!existingTag) {
			return res.status(400).send(`Tag with id "${id}" doesnt exists`);
		}

		//else we modify it

		await Tag.update(
			{ name: req.body.name },
			{
				where: {
					id: req.params.id,
				},
			}
		);

		res.json({ message: `tag with id ${req.params.id} updated!` });
	} catch (error) {
		console.log(error);
		res.status(400).send("Error on created");
	}
};
exports.DeleteTag = async (req, res) => {
	try {
		//check if the tag exists

		const existingTag = await Tag.findOne({
			where: { id: req.params.id },
		});

		//if not we return a alert

		if (!existingTag) {
			return res.status(400).send(`Tag with id "${id}" doesnt exists`);
		}

		//else we eliminate it

		await Tag.destroy({
			where: { id: req.params.id },
		});

		res.json({ msg: `Tag with id ${req.params.id} eliminated` });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
