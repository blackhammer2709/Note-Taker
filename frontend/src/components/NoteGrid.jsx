import { useContext, useEffect } from "react";
import NoteContext from "../context/noteContext";
import Note from "./Note";

const NoteGrid = () => {
	const noteContext = useContext(NoteContext);
	const { Notes, View_Archive, Current_Tag } = noteContext;

	return (
		<div className="notes-grid">
			{Notes.map((note) => {
				if (
					!View_Archive === note.active &&
					(Current_Tag === 0 || Current_Tag === note.tagId)
				) {
					return (
						<Note
							key={note.id}
							id={note.id}
							text={note.text}
							active={note.active}
							tagId={note.tagId}
							updatedAt={note.updatedAt}
						/>
					);
				}
			})}
		</div>
	);
};

export default NoteGrid;
