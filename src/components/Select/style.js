import styled from "styled-components";

const StledWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	color: ${(props) => props.theme.color.dove_gray};
	font-size: ${(props) => `${props.theme.fontSize.m}px`};
	letter-spacing: 1px;
	padding-bottom: 4px;
	display: block;
`;

const StyledSelect = styled.select`
	padding: 12px 16px;
	font-size: ${(props) => `${props.theme.fontSize.l}px`};
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.color.alto};
	cursor: pointer;
`;

export { StyledSelect, StledWrapper, Label };
