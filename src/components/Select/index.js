import PropTypes from "prop-types";

import { StyledSelect, StledWrapper, Label } from "./style";

const Select = ({ children, label, id, ...otherProps }) => {
	return (
		<StledWrapper className='select__wrapper'>
			{label && (
				<Label className='select__label' htmlFor={id}>
					{label}
				</Label>
			)}
			{/* <SelectContainer className='select__container'> */}
			<StyledSelect id={id} className='select' {...otherProps}>
				{children}
			</StyledSelect>
			{/* </SelectContainer> */}
		</StledWrapper>
	);
};

Select.prototype = {
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	label: PropTypes.string,
};

Select.defaultProps = {
	label: "",
};

export default Select;
