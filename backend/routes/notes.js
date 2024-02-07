const express = require("express");

const router = express.Router();
const NoteController = require("../controllers/noteController");

const { check } = require("express-validator");

router.post(
	"/",

	[
		check("text", "nameis required").not().isEmpty(),
		check("text", "name must be a string").isString(),
		check("active", "active must be a true or false value").isBoolean(),
	],
	NoteController.CreateNote
);
router.get("/", NoteController.GetNotes);
router.put("/:id", NoteController.UpdateNote);
router.delete("/:id", NoteController.DeleteNote);

module.exports = router;
