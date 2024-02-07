import { useContext, useEffect, useState } from "react";
import NoteContext from "../context/noteContext";
import { Button, Select, Typography, MenuItem, TextField } from "@mui/material";

const FormNote = () => {
	const noteContext = useContext(NoteContext);
	const {
		Tags,
		Notes,
		getDataForm,
		Createdata,
		Current_Note,
		SelectCurrent,
		Updatedata,
	} = noteContext;
	const [note, setNote] = useState({
		id: 0,
		text: "",
		active: true,
		tagId: 1,
		updatedAt: new Date().toISOString(),
	});

	useEffect(() => {
		if (Current_Note !== null) {
			setNote({
				id: Current_Note.id,
				text: Current_Note.text,
				active: Current_Note.active,
				tagId: Current_Note.tagId,
				updatedAt: new Date().toISOString(),
			});
			return;
		}
		cleanForm();
		return;
	}, [Current_Note]);

	const { text, active, tagId } = note;

	const validateData = (data) => {
		if (data.text.trim().length !== 0) {
			return true;
		}
		alert("TEXT MUST BE WRITEN");
		return false;
	};
	const cleanForm = () => {
		setNote({
			id: 0,
			text: "",
			active: true,
			tagId: 1,
			updatedAt: 0,
		});
		SelectCurrent({ data: null, case: "notes" });
	};

	return (
		<>
			<Typography variant="h4" align="center">
				FORM
			</Typography>
			<div className="filter">
				<select
					className="selectTag"
					name="tagId"
					onChange={(event) =>
						getDataForm(
							{ name: event.target.name, value: parseInt(event.target.value) },
							note,
							setNote
						)
					}
					value={tagId}
				>
					{Tags.map((tag) => (
						<option key={tag.id} value={tag.id}>
							{tag.name}
						</option>
					))}
				</select>
			</div>
			<TextField
				label="TEXT"
				className="formtext"
				variant="filled"
				name="text"
				multiline
				onChange={(event) =>
					getDataForm(
						{ name: event.target.name, value: event.target.value },
						note,
						setNote
					)
				}
				maxRows={4}
				value={text}
			/>

			<div className="filter">
				<select
					className="selectTag"
					name="active"
					value={active}
					onChange={(event) =>
						getDataForm(
							{
								name: event.target.name,
								value: JSON.parse(event.target.value),
							},
							note,
							setNote
						)
					}
				>
					<option key={"true"} value={true}>
						Activa
					</option>
					<option key={"false"} value={false}>
						Archivada
					</option>
				</select>
			</div>

			{Current_Note === null ? (
				<button
					className="add-button"
					onClick={() => {
						if (validateData(note)) {
							Createdata({ details: note, Tabla: "Notes" });
							cleanForm();
						}
					}}
				>
					ADD
				</button>
			) : (
				<div className="edit-buttons">
					<button
						className="add-button"
						onClick={() => {
							Updatedata({ details: note, Tabla: "Notes" });
							cleanForm();
						}}
					>
						UPDATE
					</button>
					<button className="cancel-button" onClick={() => cleanForm()}>
						CANCEL
					</button>
				</div>
			)}
		</>
	);
};

export default FormNote;
