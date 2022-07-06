import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InputForm = ({ name, placeholder, type, state, changeState }) => {
	// console.log(state);

	return (
		<div>
			<Input
				placeholder={placeholder}
				type={type}
				id={name}
				value={state}
				onChange={e => changeState(e.target.value)}
			/>
		</div>
	);
};

export default InputForm;

const Input = styled.input`
	width: 80%;
	background: #f0f0f0;
	margin: 0.25rem 0rem;
	border-radius: 4px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: 0.3s ease all;
	border: 2px solid gray;
	&:hover {
		box-shadow: 3px 0px 40px rgba(0, 0, 0, 0.2);
	}
	&:focus {
		border: 2px solid indigo;
		outline: none;
		box-shadow: 3px 0px 30px rgba(0, 0, 0, 0.2);
	}
	${props =>
		props.valid === 'true' &&
		css`
			border: 2px solid gray;
		`}
`;

InputForm.propTypes = {
	name: PropTypes.any,
	placeholder: PropTypes.any,
	type: PropTypes.any,
	state: PropTypes.any,
	changeState: PropTypes.any
};
