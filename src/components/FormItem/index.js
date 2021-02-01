import PropTypes from "prop-types";
import { FormControl, FormItemContainer, HelperText } from "./style";

const renderHelper = (helperText, error) => {
	if (helperText) {
		return (
			<HelperText error={error} className='form-item__helper'>
				{helperText}
			</HelperText>
		);
	}

	return null;
};

const renderWrapper = (child1, child2) => (
	<FormControl className='form-control'>
		{child1}
		{child2}
	</FormControl>
);
const FormItem = ({ children, helperText, error }) => {
	return (
		<FormItemContainer
			error={error}
			helperText={helperText}
			className='form-item__container'>
			{renderWrapper(children, renderHelper(helperText, error))}
		</FormItemContainer>
	);
};

FormItem.prototype = {
	children: PropTypes.node.isRequired,
	helperText: PropTypes.string,
	error: PropTypes.bool,
};

FormItem.defaultProps = {
	helperText: "",
	error: false,
};

export default FormItem;
