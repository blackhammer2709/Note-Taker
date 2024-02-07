import Filter from "./Filter";
import NoteContext from "../context/noteContext";
import { useContext } from "react";

const Header = () => {
	const noteContext = useContext(NoteContext);
	const { View_Archive, SelectCurrent } = noteContext;
	return (
		<div className="header">
			<h1>Notes{View_Archive && "\nArchived"}</h1>

			<button
				onClick={() => SelectCurrent({ data: !View_Archive, case: "view" })}
				className="toggle"
			>
				{View_Archive === false ? "VIEW ARCHIVED" : "VIEW ACTIVE"}
			</button>
			<Filter />
		</div>
	);
};

export default Header;
