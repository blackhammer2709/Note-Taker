import axios from "axios";

//a req client to make http request more easily
const AxiosCLient = axios.create({
	baseURL: procces.env.API_URL || "https://notetakerapi-gxg0.onrender.com",
});

export default AxiosCLient;
