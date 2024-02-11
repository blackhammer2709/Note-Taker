import axios from "axios";

//a req client to make http request more easily
const AxiosCLient = axios.create({
	baseURL: "https://notetakerapi-gxg0.onrender.com",
});

export default AxiosCLient;
