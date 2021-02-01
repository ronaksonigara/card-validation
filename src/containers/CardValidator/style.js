import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	align-items: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	max-width: 960px;
	width: 100%;

	.form-control {
		margin-left: 2px;
		margin-right: 2px;
	}
`;

const Body = styled.div`
	/* margin-bottom: 20px; */
`;

const DataCvvContainer = styled.div`
	display: flex;
	.form-item__container {
		width: 48%;
	}
`;

const ExpiryContainer = styled.div`
	display: flex;
	flex: 1;
`;

const Footer = styled.div`
	display: flex;
	justify-content: center;
	@media (min-width: 1024px) {
		justify-content: flex-end;
	}
`;

const Button = styled.button`
	font-size: ${(props) => `${props.theme.fontSize.l}px`};
	font-weight: 600;
	padding: 16px;
	margin: 0;
	outline: none;
	background-color: ${(props) =>
		props.invert ? props.theme.color.mine_shaft : props.theme.color.white};
	color: ${(props) =>
		props.invert ? props.theme.color.white : props.theme.color.mine_shaft};
	border: 1px solid
		${(props) =>
			props.invert ? props.theme.color.white : props.theme.color.mine_shaft};
	border-radius: 4px;
	cursor: pointer;
	width: 150px;
	margin-left: 5px;
	margin-right: 5px;
	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
	&:only-child {
		margin: 0;
	}
	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}
`;

const StatusMessage = styled.p`
	width: 100%;
	text-align: center;
	background-color: ${(props) =>
		props.status
			? props.theme.color.success
			: props.theme.color.outrageous_orange};
	margin-top: 20px;
	padding: 15px;
	margin-bottom: 20px;
	border-radius: 4px;
	color: ${(props) => props.theme.color.white};
	font-weight: 600;
	font-size: ${(props) => `${props.theme.fontSize.l}px`};
`;

export {
	Wrapper,
	DataCvvContainer,
	Button,
	Container,
	Body,
	Footer,
	ExpiryContainer,
	StatusMessage,
};
