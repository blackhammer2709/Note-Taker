import { useContext, useEffect, useState } from "react";

import NoteContext from "./context/noteContext.js";
import FormContainer from "./components/FormContainer.jsx";
import NoteGrid from "./components/NoteGrid.jsx";

function App() {
	const noteContext = useContext(NoteContext);
	const { Fetchdata } = noteContext;
	//this use effect is to make sure the app make the fetch before rendering anything
	//the array of dependencies is empty to make the effect only one time on render
	useEffect(() => {
		Fetchdata();
		return;
	}, []);

	return (
		<div>
			<div className="app-container">
				<FormContainer />
				<NoteGrid />
			</div>
		</div>
	);
}

export default App;
