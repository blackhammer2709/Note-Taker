import { useContext, useEffect } from "react";
import NoteContext from "../context/noteContext";
const Filter = () => {
	const noteContext = useContext(NoteContext);
	const { Tags, SelectCurrent, Current_Tag } = noteContext;

	return (
		<div className="filter">
			<select
				className="selectTag"
				name="tagId"
				onChange={(event) => {
					const data = parseInt(event.target.value);

					SelectCurrent({ data: data, case: "tags" });
				}}
			>
				<option key={0} value={0}>
					NO FILTER
				</option>
				{Tags.map((tag) => (
					<option key={tag.id} value={tag.id}>
						{tag.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Filter;
