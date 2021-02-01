import FormItem from "components/FormItem";
import Input from "components/Input";
import Select from "components/Select";
import { useState } from "react";
import {
	Wrapper,
	DataCvvContainer,
	Button,
	Container,
	Body,
	Footer,
	ExpiryContainer,
	StatusMessage,
} from "./style";

import {
	handleValidation,
	handleDisabled,
} from "containers/CardValidator/helper";
import { validateCard } from "api";
const handleOptionList = (total) => {
	const options = [];

	for (let i = 0; i < total; i++) {
		if (i + 1 < 10) {
			options.push(
				<option key={"month" + i} value={i + 1}>
					{`0${i + 1}`}
				</option>
			);
		} else {
			options.push(
				<option key={"month" + i} value={i + 1}>
					{`${i + 1}`}
				</option>
			);
		}
	}

	return options;
};

const CardValidator = () => {
	const [state, setState] = useState({
		name: "",
		cardNo: "",
		cvv: "",
		expiryMonth: "00",
		expiryYear: "00",
	});
	const [error, setError] = useState({
		name: "",
		cardNo: "",
		cvv: "",
		expiryMonth: "",
		expiryYear: "",
	});
	const [message, setMessage] = useState({
		status: "success",
		message: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		let newValue = value;

		if (error[name]) {
			setError((prev) => ({ ...prev, [name]: "" }));
		}
		setState((prev) => ({ ...prev, [name]: newValue }));
	};

	const handleKeyDown = (event) => {
		const { name, value } = event.target;
		if (
			(name === "cvv" && value.length >= 4 && event.keyCode !== 8) ||
			(name === "cardNo" && value.length >= 16 && event.keyCode !== 8) ||
			event.keyCode === 107 ||
			event.keyCode === 109 ||
			event.keyCode === 110 ||
			event.keyCode === 40 ||
			event.keyCode === 38
		) {
			event.preventDefault();
		}
	};

	const handleReset = () => {
		setState({
			name: "",
			cardNo: "",
			cvv: "",
			expiryMonth: "00",
			expiryYear: "00",
		});
		setError({
			name: "",
			cardNo: "",
			cvv: "",
			expiryMonth: "",
			expiryYear: "",
		});
	};

	const handleSubmit = () => {
		const [isValid, errorObj] = handleValidation(state, error);

		if (!isValid) {
			setError(errorObj);
		} else {
			validateCard(state)
				.then((response) => {
					const { success, data } = response?.data;

					if (success) {
						setMessage({
							status: success,
							message: "Details Saved Successfully",
						});
					} else {
						setMessage({
							status: success,
							message: data || "Error submitting card details",
						});
					}
					handleReset();
					setTimeout(() => {
						setMessage({
							status: true,
							message: "",
						});
					}, 2500);
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<Wrapper>
			<Container>
				<Body>
					<FormItem error={Boolean(error.cardNo)} helperText={error.cardNo}>
						<Input
							id='cardNo'
							placeholder='XXXX XXXX XXXX XXXX
				'
							type='number'
							name='cardNo'
							value={state.cardNo}
							onChange={handleChange}
							onKeyDown={handleKeyDown}
						/>
					</FormItem>
					<DataCvvContainer>
						<ExpiryContainer>
							<FormItem
								error={Boolean(error.expiryMonth)}
								helperText={error.expiryMonth}>
								<Select
									value={state.expiryMonth}
									onChange={handleChange}
									name='expiryMonth'
									id='expiryMonth'>
									<option value='00' disabled>
										MM
									</option>

									{handleOptionList(12)}
								</Select>
							</FormItem>
							<FormItem
								error={Boolean(error.expiryYear)}
								helperText={error.expiryYear}>
								<Select
									value={state.expiryYear}
									onChange={handleChange}
									id='expiryYear'
									name='expiryYear'>
									<option value='00' disabled>
										YY
									</option>
									{handleOptionList(99)}
								</Select>
							</FormItem>
						</ExpiryContainer>

						<FormItem error={Boolean(error.cvv)} helperText={error.cvv}>
							<Input
								id='cvv'
								type='number'
								placeholder='CVV'
								name='cvv'
								value={state.cvv}
								onChange={handleChange}
								onKeyDown={handleKeyDown}
							/>
						</FormItem>
					</DataCvvContainer>
					<FormItem error={Boolean(error.name)} helperText={error.name}>
						<Input
							id='name'
							placeholder='Card Name
				'
							type='text'
							name='name'
							value={state.name}
							onChange={handleChange}
						/>
					</FormItem>
				</Body>
				<Footer>
					<Button onClick={handleReset}>Reset</Button>
					<Button
						disabled={handleDisabled(state, error)}
						onClick={handleSubmit}
						invert>
						Submit
					</Button>
				</Footer>
			</Container>
			{message.message && (
				<StatusMessage status={message.status}>{message.message}</StatusMessage>
			)}
		</Wrapper>
	);
};

export default CardValidator;
