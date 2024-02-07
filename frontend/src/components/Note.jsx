import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext } from "react";
import NoteContext from "../context/noteContext";
import { Button, Typography } from "@mui/material";

const Note = ({ id, text, active, tagId, updatedAt }) => {
	const noteContext = useContext(NoteContext);
	const { Deletedata, Tags, SelectCurrent, View_Archive } = noteContext;

	return (
		<div
			className={`note-item ${View_Archive && "archived"}`}
			onClick={() =>
				SelectCurrent({
					data: { id, text, active, tagId, updatedAt },
					case: "notes",
				})
			}
		>
			<Typography variant="h6" align="left">
				{Tags.map((tag) => (tag.id === tagId ? tag.name : null))}
			</Typography>

			<Typography variant="h5" align="center">
				{text}
			</Typography>
			<div className="note-footer">
				<Typography variant="h7">{updatedAt.slice(0, 10)}</Typography>
				{active !== true ? <small>ARCHIVADA</small> : null}
				<Button
					color="inherit"
					onClick={() => Deletedata({ id: id, Tabla: "Notes" })}
				>
					<DeleteForeverIcon className="delete-icon" />
				</Button>
			</div>
		</div>
	);
};

export default Note;
