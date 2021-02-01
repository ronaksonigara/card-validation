import PropTypes from "prop-types";
import { InputContainer, InputField, Label } from "./style";

const Input = ({ id, label, ...otherProps }) => {
	return (
		<InputContainer className='input-container'>
			{label && (
				<Label className='input__label' htmlFor={id}>
					{label}
				</Label>
			)}
			<InputField className='input__fields' id={id} {...otherProps} />
		</InputContainer>
	);
};

Input.prototype = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
};

Input.defaultProps = {
	label: "",
	placeholder: "",
};

export default Input;
