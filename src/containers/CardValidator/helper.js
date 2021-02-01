const nameReg = /[\d+-=*/!@#$%^]+/;
export const handleValidation = (state, error) => {
	let isValid = true;
	const errorObj = { ...error };
	Object.keys(state).forEach((item) => {
		if (!Boolean(state[item])) {
			if (isValid) {
				isValid = false;
			}
			errorObj[item] = "Mandatory Field";
		}

		if (
			item === "cardNo" &&
			(state[item].length < 13 || state[item].length > 16)
		) {
			if (isValid) {
				isValid = false;
			}
			errorObj[item] = "Invalid Card";
		} else if (
			item === "cvv" &&
			(state[item].length < 3 || state[item].length > 4)
		) {
			if (isValid) {
				isValid = false;
			}
			errorObj[item] = "Invalid CVV";
		} else if (item === "name" && nameReg.test(state[item])) {
			if (isValid) {
				isValid = false;
			}
			errorObj[item] = "Invalid character";
		}
	});
	return [isValid, errorObj];
};

export const handleDisabled = (state, error) => {
	if (
		state.cardNo &&
		state.name &&
		state.cvv &&
		state.expiryMonth !== "00" &&
		state.expiryYear !== "00" &&
		!error.cardNo &&
		!error.name &&
		!error.cvv &&
		!error.expiryMonth &&
		!error.expiryYear
	) {
		return false;
	}
	return true;
};
