import axios from "axios";
const secureinstance = axios.create({
	baseURL: "http://192.168.30.68:5555/api",
	headers: {
		"Content-Type": "application/json",
	},
});
secureinstance.interceptors.request.use(
	(config) => {
		const Token = localStorage.getItem("Token");
		if (!Token) {
			window.location.href = "/login";
		} else {
			config.headers["authorization"] = `Bearer ${Token}`;
		}
		console.log(config);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

secureinstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalrequest = error.config;
		if (error.response.status === 403 && !originalrequest._retry) {
			originalrequest._retry = true;
			const refreshtoken = localStorage.getItem("RefreshToken");
			if (refreshtoken) {
				try {
					const response = await axios.post(
						"http://127.0.0.1:5555/api/token/refresh",
						{
							token: refreshtoken,
						}
					);
					console.log(response.data.token);
					localStorage.setItem("Token", response.data.token);
					originalrequest.headers[
						"authorization"
					] = `Bearer ${response.data.token}`;
					return secureinstance(originalrequest);
				} catch (err) {
					localStorage.removeItem("RefreshToken");
					localStorage.removeItem("Token");
					window.location.href = "/login";
				}
			}
		}
		return Promise.reject(error);
	}
);
export default secureinstance;
