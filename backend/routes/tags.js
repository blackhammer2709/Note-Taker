const express = require("express");

const router = express.Router();
const TagController = require("../controllers/tagController");

const { check } = require("express-validator");

router.post(
	"/",

	[
		check("name", "nameis required").not().isEmpty(),
		check("name", "name must be a string").isString(),
	],
	TagController.CreateTag
);
router.get("/", TagController.GetTags);
router.get("/:id/notes", TagController.GetTagNotes);
router.put("/:id", TagController.UpdateTag);
router.delete("/:id", TagController.DeleteTag);

module.exports = router;
