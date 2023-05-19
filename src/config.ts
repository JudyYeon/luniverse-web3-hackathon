import { authToken } from "./answers";

namespace Config {
	const PROTOCOL = "ethereum";
	const NETWORK = "mainnet";

	export const BASE_URL = `/v1/${PROTOCOL}/${NETWORK}`;
	export const AUTH_TOKEN = authToken;
}

export default Config;
