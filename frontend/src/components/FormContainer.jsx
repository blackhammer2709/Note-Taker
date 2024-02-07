import FormNote from "./FormNote";
import FormTag from "./FormTag";
import Header from "./Header";

const FormContainer = () => {
	return (
		<div className="note-form">
			<Header />

			<FormNote />
		</div>
	);
};

export default FormContainer;
