import axios from "axios";

//a req client to make http request more easily
const AxiosCLient = axios.create({
	baseURL: "http://localhost:4000",
});

export default AxiosCLient;
