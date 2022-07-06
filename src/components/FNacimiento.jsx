import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import imgProfile from '../styles/images/profile-pic.png';
import InputForm from './InputForm';

const FNacimiento = ({ day, setDay, month, setMonth, year, setYear }) => {
	const meses = [
		{
			name: 'Enero',
			id: 12
		},
		{
			name: 'Febrero',
			id: 22
		},
		{
			name: 'Marzo',
			id: 32
		},
		{
			name: 'Abril',
			id: 42
		},
		{
			name: 'Mayo',
			id: 52
		},
		{
			name: 'Junio',
			id: 62
		},
		{
			name: 'Julio',
			id: 72
		},
		{
			name: 'Agosto',
			id: 82
		},
		{
			name: 'Septiembre',
			id: 92
		},
		{
			name: 'Octubre',
			id: 102
		},
		{
			name: 'Noviembre',
			id: 112
		},
		{
			name: 'Diciembre',
			id: 122
		}
	];

	const handleSelect = e => {
		e.preventDefault();
		setMonth(e.target.value);
	};

	return (
		<>
			<ContainerOfChat>
				<Chat>
					<ProfileImgBox src={imgProfile} alt='profileImg' />
					<SectionForm>
						<TitlePerForm> ¿Cuál es tu fecha de nacimiento? </TitlePerForm>
						<InputForm
							type='number'
							state={day}
							changeState={setDay}
							name='day'
							placeholder='Día'
						/>
						<label>
							<Seleccionador onChange={handleSelect} name='field'>
								<option>Mes</option>
								{meses.map(mes => {
									return (
										<option key={mes.id} value={mes.name}>
											{mes.name}
										</option>
									);
								})}
							</Seleccionador>
						</label>
						<InputForm
							type='number'
							state={year}
							changeState={setYear}
							name='year'
							placeholder='Año'
						/>
					</SectionForm>
				</Chat>
			</ContainerOfChat>

			{(day || month || year) && (
				<Success>{`Fecha de nacimiento: ${day} ${month} ${year}`}</Success>
			)}
		</>
	);
};

export default FNacimiento;

FNacimiento.propTypes = {
	day: PropTypes.any,
	setDay: PropTypes.any,
	month: PropTypes.any,
	setMonth: PropTypes.any,
	year: PropTypes.any,
	setYear: PropTypes.any
};

const Seleccionador = styled.select`
	width: 12.29rem;
	margin: 0.2rem 0rem;
	background: #f0f0f0;
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
		border: 2px solid gray;
		outline: none;
		box-shadow: 3px 0px 30px rgba(0, 0, 0, 0.2);
	}
	${props =>
		props.valid === 'true' &&
		css`
			border: 2px solid gray;
		`}
	${props =>
		props.valid === 'false' &&
		css`
			border: 2px solid gray !important;
		`}
`;

const ContainerOfChat = styled.div`
	width: 23rem;
	margin: 40px;
`;

const ProfileImgBox = styled.img`
	height: 55px;
	width: 55px;
	border-radius: 5px;
	border: 3px solid pink;
`;

const Chat = styled.div`
	display: flex;
	gap: 0px;
`;

const SectionForm = styled.div`
	display: flex;
	background-color: #f0f0f0;
	width: 17.9rem;
	flex-direction: column;
	/* position: relative; */
	/* margin-left: 20px; */
	/* margin-right: 10px; */
	margin-left: 1.1rem;
	padding: 20px;
	align-items: right;
	text-align: center;
	border-radius: 5px;
`;

const TitlePerForm = styled.p`
	font-weight: bold;
	display: flex;
`;

const Success = styled.div`
	display: flex;
	align-items: left;
	text-align: left;
	flex-direction: column;
	margin-top: 20px;
	max-height: 120px;
	max-width: 300px;
	font-size: 12px;
	background: #f074dc;
	color: #141414;
	padding: 10px 30px;
	/* font-weight: bold; */
	border-radius: 5px;
`;
