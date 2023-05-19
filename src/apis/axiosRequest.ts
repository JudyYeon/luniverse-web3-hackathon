import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Config from "../config";

const axiosInstance = axios.create({
	baseURL: Config.BASE_URL,
	headers: {
		Authorization: `Bearer ${Config.AUTH_TOKEN}`,
	},
});

const axiosRequest = async (options: AxiosRequestConfig) =>
	axiosInstance
		.request(options)
		.then((response) => response.data)
		.catch((err: AxiosError) => {
			console.error(err);
			throw Error(err.message);
		});

export default axiosRequest;
