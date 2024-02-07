import React, { useReducer } from "react";
import NoteReducer from "./noteReducer";
import NoteContext from "./noteContext";

import {
	NUEVO_REGISTRO,
	BORRAR_REGISTRO,
	MODIFICAR_REGISTRO,
	FETCH_REGISTROS,
	SELECCIONAR_REGISTRO,
} from "./types";
import AxiosClient from "../config/client";

const NoteState = (props) => {
	const Initialstate = {
		Notes: [],
		Tags: [],
		Current_Note: null,
		Current_Tag: 0,
		View_Archive: false,
		Form_type: "Notes",
	};

	const [state, dispatch] = useReducer(NoteReducer, Initialstate);

	const Createdata = async (data) => {
		try {
			const resultado = await AxiosClient.post(
				`/api/${data.Tabla.toLowerCase()}`,
				data.details
			);

			dispatch({
				type: NUEVO_REGISTRO,
				payload: { details: resultado.data.resultado, Tabla: data.Tabla },
			});
		} catch (error) {
			console.log(`error on created: ${error}`);
		}
	};

	const Fetchdata = async () => {
		try {
			const data = [];
			data.push(await AxiosClient.get("/api/notes"));

			data.push(await AxiosClient.get("/api/tags"));

			dispatch({
				type: FETCH_REGISTROS,
				payload: data,
			});
		} catch (error) {
			console.log(`error on fetch: ${error}`);
		}
	};

	const Updatedata = async (data) => {
		try {
			const result = await AxiosClient.put(
				`/api/${data.Tabla.toLowerCase()}/${data.details.id}`,
				data.details
			);
			console.log(data);
			dispatch({
				type: MODIFICAR_REGISTRO,
				payload: data,
			});
		} catch (error) {
			console.log(`error on updated ${data.Tabla}: ${error}`);
		}
	};

	const Deletedata = async (data) => {
		try {
			await AxiosClient.delete(`/api/${data.Tabla.toLowerCase()}/${data.id}`);

			dispatch({
				type: BORRAR_REGISTRO,
				payload: data,
			});
		} catch (error) {
			console.log(`error on eliminate ${error}`);
		}
	};

	const SelectCurrent = (data) => {
		dispatch({
			type: SELECCIONAR_REGISTRO,
			payload: data,
		});
	};

	const getDataForm = (data, formData, setData) => {
		setData({ ...formData, [data.name]: data.value });
	};

	return (
		<NoteContext.Provider
			value={{
				Notes: state.Notes,
				Tags: state.Tags,
				Current_Note: state.Current_Note,
				Current_Tag: state.Current_Tag,
				View_Archive: state.View_Archive,
				Form_type: state.Form_tpe,
				Createdata,
				Fetchdata,
				Updatedata,
				Deletedata,
				SelectCurrent,
				getDataForm,
			}}
		>
			{props.children}
		</NoteContext.Provider>
	);
};

export default NoteState;
