import axios from "axios";

const axiosConfig = {
	headers: {
		"content-Type": "application/json",
		origin: "https://instacred.me",
	},
};

export const validateCard = (data) => {
	return axios.post(
		"https://run.mocky.io/v3/0b14a8da-5fc7-4443-8511-53d687399bc9",
		data,
		axiosConfig
	);
};
