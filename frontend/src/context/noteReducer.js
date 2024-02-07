import {
	NUEVO_REGISTRO,
	BORRAR_REGISTRO,
	MODIFICAR_REGISTRO,
	FETCH_REGISTROS,
	SELECCIONAR_REGISTRO,
} from "./types";

const NoteReducer = (state, action) => {
	switch (action.type) {
		case NUEVO_REGISTRO:
			return {
				...state,
				[action.payload.Tabla]: [
					...state[action.payload.Tabla],
					action.payload.details,
				],
			};
		case FETCH_REGISTROS:
			return {
				...state,
				Notes: action.payload[0].data.Notes,
				Tags: action.payload[1].data.Tags,
			};

		case MODIFICAR_REGISTRO:
			return {
				...state,
				[action.payload.Tabla]: state[action.payload.Tabla].map((data) =>
					data.id === action.payload.details.id ? action.payload.details : data
				),
				Current_Note: null,
			};
		case BORRAR_REGISTRO:
			return {
				...state,
				[action.payload.Tabla]: state[action.payload.Tabla].filter(
					(data) => data.id !== action.payload.id
				),
				Current_Note: null,
			};
		case SELECCIONAR_REGISTRO:
			if (action.payload.case === "notes") {
				return {
					...state,
					Current_Note: action.payload.data,
				};
			}
			if (action.payload.case === "tags") {
				return {
					...state,
					Current_Tag: action.payload.data,
				};
			}
			if (action.payload.case === "view") {
				return {
					...state,
					View_Archive: action.payload.data,
				};
			}
			if (action.payload.case === "form") {
				return {
					...state,
					Form_type: action.payload.data,
				};
			}

		default:
			return state;
	}
};

export default NoteReducer;
