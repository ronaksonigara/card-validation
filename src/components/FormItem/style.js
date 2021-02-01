import styled, { css } from "styled-components";
import { InputField, Label } from "components/Input/style";
import { StyledSelect } from "components/Select/style";

const FormItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	${({ error }) =>
		error &&
		css`
			${InputField},${StyledSelect} {
				border-color: ${(props) => props.theme.color.outrageous_orange};
			}
			${Label} {
				color: ${(props) => props.theme.color.outrageous_orange};
			}
		`}
	${({ helperText }) =>
		helperText &&
		css`
			${FormControl} {
				margin-bottom: 10px;
			}
		`}
`;

const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

const HelperText = styled.p`
	margin-top: 5px;
	margin-bottom: 0;
	font-size: ${(props) => `${props.theme.fontSize.sm}px`};
	color: ${(props) =>
		props.error
			? props.theme.color.outrageous_orange
			: props.theme.color.dove_gray};
`;

export { FormItemContainer, FormControl, HelperText };
